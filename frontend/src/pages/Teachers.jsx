import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { Plus, Search, Trash2, X } from "lucide-react";

const Teachers = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "Anita Sharma", subject: "Mathematics", experience: "5 Years", email: "anita@gmail.com", status: "Active" },
    { id: 2, name: "Raj Mehta", subject: "Physics", experience: "8 Years", email: "raj@gmail.com", status: "Inactive" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newTeacher, setNewTeacher] = useState({
    name: "",
    subject: "",
    experience: "",
    email: "",
    status: "Active",
  });

  const handleAddTeacher = () => {
    if (!newTeacher.name || !newTeacher.subject || !newTeacher.email) {
      alert("Please fill all required fields");
      return;
    }

    const teacher = {
      id: Date.now(),
      ...newTeacher,
    };

    setTeachers([...teachers, teacher]);
    setNewTeacher({
      name: "",
      subject: "",
      experience: "",
      email: "",
      status: "Active",
    });

    setShowModal(false);
  };

  const handleDelete = (id) => {
    const updated = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updated);
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Teachers Management</h2>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
        >
          <Plus size={18} />
          Add Teacher
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search teacher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Subject</th>
              <th className="p-4">Experience</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredTeachers.map((teacher) => (
              <tr key={teacher.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{teacher.name}</td>
                <td className="p-4">{teacher.subject}</td>
                <td className="p-4">{teacher.experience}</td>
                <td className="p-4">{teacher.email}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      teacher.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {teacher.status}
                  </span>
                </td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDelete(teacher.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredTeachers.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No teachers found.
          </div>
        )}
      </div>

      {/* Add Teacher Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-[450px] p-6 rounded-xl shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-semibold mb-4">Add New Teacher</h3>

            <input
              type="text"
              placeholder="Teacher Name"
              value={newTeacher.name}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, name: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Subject"
              value={newTeacher.subject}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, subject: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Experience (e.g. 5 Years)"
              value={newTeacher.experience}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, experience: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              value={newTeacher.email}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, email: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
            />

            <select
              value={newTeacher.status}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, status: e.target.value })
              }
              className="w-full mb-4 p-2 border rounded-lg"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button
              onClick={handleAddTeacher}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Add Teacher
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default Teachers;