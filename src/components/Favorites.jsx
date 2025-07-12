import Footer from "./Footer"
import workerAmigurumi from "/amigurumi_trabajando.png"
import "../styles/notFound.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import { Button } from "react-bootstrap"

function Favorites (){
    const navigate = useNavigate();

     function goHome() {
    navigate("/");
  }
    return (
         <div>
            <Helmet>
                <title>Mis Favoritos | Pinicrochet</title>
                <meta name="description" content="Carrito de compras." />
              </Helmet>
            <h2 className ="cute-title">Mis favoritos</h2>	
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

export default Favorites