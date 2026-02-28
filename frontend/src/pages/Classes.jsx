import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { Plus, Search, Trash2, X } from "lucide-react";

const Classes = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "10",
      section: "A",
      teacher: "Anita Sharma",
      students: 40,
      status: "Active",
    },
    {
      id: 2,
      name: "9",
      section: "B",
      teacher: "Raj Mehta",
      students: 35,
      status: "Inactive",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newClass, setNewClass] = useState({
    name: "",
    section: "",
    teacher: "",
    students: "",
    status: "Active",
  });

  const handleAddClass = () => {
    if (!newClass.name || !newClass.section || !newClass.teacher) {
      alert("Please fill required fields");
      return;
    }

    const classData = {
      id: Date.now(),
      ...newClass,
      students: Number(newClass.students || 0),
    };

    setClasses([...classes, classData]);

    setNewClass({
      name: "",
      section: "",
      teacher: "",
      students: "",
      status: "Active",
    });

    setShowModal(false);
  };

  const handleDelete = (id) => {
    const updated = classes.filter((cls) => cls.id !== id);
    setClasses(updated);
  };

  const filteredClasses = classes.filter((cls) =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Classes Management</h2>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
        >
          <Plus size={18} />
          Add Class
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search class..."
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
              <th className="p-4">Class</th>
              <th className="p-4">Section</th>
              <th className="p-4">Class Teacher</th>
              <th className="p-4">Total Students</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredClasses.map((cls) => (
              <tr key={cls.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{cls.name}</td>
                <td className="p-4">{cls.section}</td>
                <td className="p-4">{cls.teacher}</td>
                <td className="p-4">{cls.students}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cls.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {cls.status}
                  </span>
                </td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDelete(cls.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredClasses.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No classes found.
          </div>
        )}
      </div>

      {/* Add Class Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-[450px] p-6 rounded-xl shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-semibold mb-4">Add New Class</h3>

            <input
              type="text"
              placeholder="Class (e.g. 10)"
              value={newClass.name}
              onChange={(e) =>
                setNewClass({ ...newClass, name: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Section (e.g. A)"
              value={newClass.section}
              onChange={(e) =>
                setNewClass({ ...newClass, section: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
            />

            <input
              type="text"
              placeholder="Class Teacher"
              value={newClass.teacher}
              onChange={(e) =>
                setNewClass({ ...newClass, teacher: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
            />

            <input
              type="number"
              placeholder="Total Students"
              value={newClass.students}
              onChange={(e) =>
                setNewClass({ ...newClass, students: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
            />

            <select
              value={newClass.status}
              onChange={(e) =>
                setNewClass({ ...newClass, status: e.target.value })
              }
              className="w-full mb-4 p-2 border rounded-lg"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button
              onClick={handleAddClass}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Add Class
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default Classes;