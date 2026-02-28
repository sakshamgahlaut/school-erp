import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Classes from "./pages/Classes";

const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />}
      />

      <Route
        path="/students"
        element={isAuthenticated() ? <Students /> : <Navigate to="/" />}
      />

      <Route
        path="/teachers"
        element={isAuthenticated() ? <Teachers /> : <Navigate to="/" />}
      />

      <Route
        path="/classes"
        element={isAuthenticated() ? <Classes /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;