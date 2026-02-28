import AdminLayout from "../layouts/AdminLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", students: 400 },
  { name: "Feb", students: 600 },
  { name: "Mar", students: 800 },
  { name: "Apr", students: 1000 },
  { name: "May", students: 1200 },
];

const Dashboard = () => {
  return (
    <AdminLayout>
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">

        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-sm opacity-80">Total Students</h3>
          <p className="text-2xl font-bold mt-2">1200</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-sm opacity-80">Total Teachers</h3>
          <p className="text-2xl font-bold mt-2">75</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-sm opacity-80">Active Classes</h3>
          <p className="text-2xl font-bold mt-2">32</p>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-sm opacity-80">Attendance Rate</h3>
          <p className="text-2xl font-bold mt-2">92%</p>
        </div>

      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-lg font-semibold mb-4">Student Growth</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="students"
              stroke="#6366F1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

        <ul className="space-y-3 text-gray-600">
          <li>✔ New student registered</li>
          <li>✔ Teacher added</li>
          <li>✔ Attendance submitted</li>
          <li>✔ Class updated</li>
        </ul>
      </div>

    </AdminLayout>
  );
};

export default Dashboard;