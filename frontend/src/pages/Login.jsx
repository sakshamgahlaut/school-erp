import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo credentials
    const demoEmail = "admin@erp.com";
    const demoPassword = "123456";

    if (email === demoEmail && password === demoPassword) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 p-6">
      
      <div className="flex w-[950px] rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* LEFT SIDE */}
        <div className="w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex flex-col justify-center items-center p-10">
          <h1 className="text-3xl font-bold mb-4">School ERP</h1>
          <p className="text-sm text-center opacity-90 mb-6">
            Manage students, teachers & academics in one powerful system.
          </p>

          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="Illustration"
            className="w-72 drop-shadow-xl"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Login to your account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span
                className="absolute right-4 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="cursor-pointer text-purple-600 hover:underline">
                Forgot password?
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded-xl font-semibold hover:opacity-90 transition duration-300 shadow-lg"
            >
              Login
            </button>

          </form>

          {/* Register Link */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Not registered?{" "}
            <span
              className="text-purple-600 font-medium cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Create an account
            </span>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;