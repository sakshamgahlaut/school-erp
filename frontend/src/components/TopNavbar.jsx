import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="bg-white shadow px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">
        Admin Dashboard 🚀
      </h1>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        <LogOut size={16} />
        Logout
      </button>
    </div>
  );
};

export default TopNavbar;