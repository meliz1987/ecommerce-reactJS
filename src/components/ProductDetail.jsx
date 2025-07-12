import { useContext, useEffect, useState } from "react";
import { Link,useParams, useNavigate } from "react-router-dom";
import "../styles/productDetail.css";
import { executeBasicSweet } from "../assets/SweetAlert";
import loadingGif from "../assets/loadingSpinner.gif";
import { Button, Card as BootstrapCard } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import Footer from "./Footer";


function ProductDetail() {

  const {addProductToCart} = useContext (CartContext)
  const [showCartButton, setShowCartButton] = useState(false);



  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://68100d8c27f2fdac24101f1f.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        const productFound = data.find((item) => item.id === id);
        if (productFound) {
          setProduct(productFound);
        } else {
          setError("Producto no encontrado.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setError("Hubo un error al obtener el producto.");
        setLoading(false);
      });
  }, [id]);

  function addToCart() {
    if (quantity < 1) return;
    executeBasicSweet(
      "Producto Agregado",
      "El producto fue agregado al carrito con éxito",
      "success",
      "Cerrar"
    );
    addProductToCart({ ...product, quantity });
    setShowCartButton(true);
  }

  function addCounter() {
    setQuantity(quantity + 1);
  }

  function substractCounter() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function keepBuying() {
    navigate("/productos");
  }

  if (loading)
    return (
      <div className="loading-container">
        <img src={loadingGif} alt="Cargando..." className="loading-gif" />
        <p className="cute-title">Cargando producto...</p>
      </div>
    );

  if (error) return <p>{error}</p>;
  if (!product) return null;

  return (
    <div>
    <div className="detail-container">
      <BootstrapCard className="product-detail-card shadow-sm">
        <BootstrapCard.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="detail-image"
        />
        <BootstrapCard.Body>
          <BootstrapCard.Title>{product.name}</BootstrapCard.Title>
          <BootstrapCard.Text>{product.description}</BootstrapCard.Text>
          <BootstrapCard.Text>
            <strong>$ {product.price}</strong>
          </BootstrapCard.Text>

          <div className="detail-counter mb-3">
            <Button variant="secondary" size="sm" onClick={substractCounter}>
              -
            </Button>
            <span className="mx-2">{quantity}</span>
            <Button variant="secondary" size="sm" onClick={addCounter}>
              +
            </Button>
          </div>

        <div className="d-flex flex-column flex-md-row gap-2 mt-3 justify-content-center">
          <Button variant="success" onClick={addToCart}>Agregar al carrito </Button>
          <Button variant="primary" onClick={keepBuying} >Seguir comprando </Button>
          {showCartButton && (
    <Link to="/miCarrito">
      <Button variant="outline-primary">
        Ir a mi carrito
      </Button>
    </Link>
  )}
  </div>
        </BootstrapCard.Body>
      </BootstrapCard>
      
      
    </div>
      <Footer />
    </div>
    
    
  );
}

export default ProductDetail;
