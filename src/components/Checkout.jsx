import Footer from "./Footer"
import workerAmigurumi from "/amigurumi_trabajando.png"
import "../styles/notFound.css";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Button } from "react-bootstrap"

function Checkout (){
    const navigate = useNavigate();

     function goHome() {
    navigate("/");
  }
    return (
        <div>
            <h2 className ="cute-title">Finalizar Compra</h2>	
             <img src = {workerAmigurumi} alt="Amigurumi ppagina en construccion" className="notfound-image"/>
              <p>Página en construcción.</p>
      <div className="d-flex justify-content-center mt-3">
  <Button onClick={goHome} className="btn-home d-flex align-items-center gap-2">
    Volver al inicio <FaHome className="animate-icon" />
  </Button>
</div>
        </div>
    )
}

export default Checkout