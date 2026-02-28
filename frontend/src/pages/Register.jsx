import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">
      
      <div className="flex w-[1000px] bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* LEFT SIDE - Info Panel */}
        <div className="w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">
            Join School ERP 🚀
          </h1>
          <p className="text-sm opacity-90 mb-6">
            Create your account to manage students, teachers and academic records efficiently.
          </p>

          <ul className="space-y-3 text-sm">
            <li>✔ Secure Authentication</li>
            <li>✔ Role Based Dashboard</li>
            <li>✔ Academic Management</li>
            <li>✔ Attendance & Marks Tracking</li>
          </ul>
        </div>

        {/* RIGHT SIDE - Form */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span
                className="absolute right-4 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            <select
              required
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-xl font-semibold hover:opacity-90 transition duration-300 shadow-lg"
            >
              Register
            </button>

          </form>

          {/* Login Redirect */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <span
              className="text-purple-600 font-medium cursor-pointer hover:underline"
              onClick={() => navigate("/")}
            >
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;