import Footer from "./Footer";
import imageAdmin from "/admin-amico.png";
import "../styles/notFound.css";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { BsGear } from "react-icons/bs";


export default function Admin() {
  const { user, logout, admin } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Protección por si entra sin ser admin
  if (!admin) return <Navigate to="/login" replace />;

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <div className="admin-welcome-card text-center p-4 mb-4">
        <h4 className="cute-title">¡Hola Administrador!</h4>
        <p>Sesión iniciada como <strong>{typeof user === "string" ? user : user.email}</strong></p>

        {/* Botón para ir al panel */}
        <div className="mt-4">
          <Link to="/admin/panel" className="btn btn-primary">
            <BsGear className="me-2" />
            Ir al Panel de Gestión de Productos
          </Link>
        </div>
        <img src={imageAdmin} alt="Work illustrations by Storyset" className="notfound-image" />
        <div className="text-center mt-3">
        <button className="btn btn-danger" onClick={handleLogout}>
          <FaSignOutAlt className="me-2" />
          Cerrar sesión
        </button>
      </div>

        
      </div>

      

      <Footer />
    </div>
  );
}
