import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <TopNavbar />

        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;