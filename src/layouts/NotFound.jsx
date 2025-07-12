import { Link } from "react-router-dom";
import imageNotFound from "/notFound.png"
import "../styles/notFound.css";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Button } from "react-bootstrap"


function NotFound() {
     const navigate = useNavigate();

     function goHome() {
    navigate("/");
  }

  return (
    <div>
    <main className="notfound-container">
      <h2 className="cute-title">¡Oops!</h2>
      <img src = {imageNotFound} alt="Página no encontrada" className="notfound-image"/>
      <h3>Página no encontrada</h3>
      <p>La ruta que estás buscando no existe o fue movida.</p>
      <Button onClick={goHome} className="btn-home d-flex align-items-center justify-content-center gap-2 mt-3">
  Volver al inicio <FaHome className="animate-icon" />
</Button>

      
      <br/>
     
    </main>
    
    
    </div>
  );
} 
export default NotFound;