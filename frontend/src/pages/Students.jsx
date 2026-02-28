import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { Plus, Search, Edit, Trash2, X } from "lucide-react";

const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Sharma", class: "10A", email: "rahul@gmail.com", status: "Active" },
    { id: 2, name: "Priya Verma", class: "9B", email: "priya@gmail.com", status: "Inactive" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newStudent, setNewStudent] = useState({
    name: "",
    class: "",
    email: "",
    status: "Active",
  });

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.class || !newStudent.email) {
      alert("Please fill all fields");
      return;
    }

    const student = {
      id: Date.now(),
      ...newStudent,
    };

    setStudents([...students, student]);
    setNewStudent({ name: "", class: "", email: "", status: "Active" });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    const updated = students.filter((student) => student.id !== id);
    setStudents(updated);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Students Management</h2>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
        >
          <Plus size={18} />
          Add Student
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search student..."
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
              <th className="p-4">Class</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{student.name}</td>
                <td className="p-4">{student.class}</td>
                <td className="p-4">{student.email}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>

                <td className="p-4 flex justify-center gap-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Edit size={18} />
                  </button>

                  <button
                    onClick={() => handleDelete(student.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredStudents.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No students found.
          </div>
        )}
      </div>

      {/* Add Student Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-[400px] p-6 rounded-xl shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-semibold mb-4">Add New Student</h3>

            <input
              type="text"
              placeholder="Student Name"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Class"
              value={newStudent.class}
              onChange={(e) =>
                setNewStudent({ ...newStudent, class: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              value={newStudent.email}
              onChange={(e) =>
                setNewStudent({ ...newStudent, email: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
            />

            <select
              value={newStudent.status}
              onChange={(e) =>
                setNewStudent({ ...newStudent, status: e.target.value })
              }
              className="w-full mb-4 p-2 border rounded-lg"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button
              onClick={handleAddStudent}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Add Student
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default Students;