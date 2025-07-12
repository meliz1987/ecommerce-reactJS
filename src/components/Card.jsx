import { Button, Card as BootstrapCard } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/product.css";
import Footer from "../components/Footer";



function Card({ product }) {
  return (
        <BootstrapCard className="product-card shadow-sm mb-3">
      <Link to={`/productos/${product.id}`}>
        <BootstrapCard.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </Link>
      <BootstrapCard.Body>
        <BootstrapCard.Title>{product.name}</BootstrapCard.Title>
        <BootstrapCard.Text>
          <strong>$ {product.price}</strong>
        </BootstrapCard.Text>
        <Link to={`/productos/${product.id}`}>
          <Button style={{ background: "#4f4ba1", borderColor: "#4f4ba1" }}>
            Ver más
          </Button>
        </Link>
      </BootstrapCard.Body>
      
    </BootstrapCard>

    
  );
}


export default Card;
