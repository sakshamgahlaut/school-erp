import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, GraduationCap, BookOpen } from "lucide-react";

const Sidebar = () => {
  const linkClass =
    "flex items-center gap-3 p-2 rounded-lg transition";

  const activeClass =
    "bg-white text-purple-700 font-semibold";

  return (
    <div className="w-64 bg-gradient-to-b from-purple-700 to-indigo-700 text-white p-6">
      <h2 className="text-2xl font-bold mb-10">School ERP</h2>

      <ul className="space-y-4">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : "hover:bg-purple-600"}`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : "hover:bg-purple-600"}`
          }
        >
          <Users size={20} />
          Students
        </NavLink>

        <NavLink
          to="/teachers"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : "hover:bg-purple-600"}`
          }
        >
          <GraduationCap size={20} />
          Teachers
        </NavLink>

        <NavLink
          to="/classes"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : "hover:bg-purple-600"}`
          }
        >
          <BookOpen size={20} />
          Classes
        </NavLink>

      </ul>
    </div>
  );
};

export default Sidebar;