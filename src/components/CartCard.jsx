import "../styles/cart.css";
import { Card as BootstrapCard, Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs"; // icono de menos

function CartCard({ product, TriggerFunction }) {
  function deleteOneFromCart() {
    TriggerFunction(product.id, false); // Restar una unidad
  }

  function deleteAllFromCart() {
    TriggerFunction(product.id, true); // Eliminar todo
  }

  return (
    <BootstrapCard className="mb-3 shadow-sm cart-card">
      <div className="d-flex align-items-center">
        <BootstrapCard.Img
          variant="top"
          src={product.image}
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "8px",
            margin: "10px",
          }}
        />
        <BootstrapCard.Body>
          <BootstrapCard.Title className="cart-title" style={{ color: "#630f89" }}>
            {product.name}
          </BootstrapCard.Title>

          <div className="cart-unit">
            <p style={{ color: "#630f89", margin: 0 }}>Cantidad</p>
            <span style={{ color: "black" }}>{product.quantity}</span>
          </div>

          <div className="cart-unit">
            <p style={{ color: "#630f89", margin: 0 }}>Precio Unitario</p>
            <span style={{ color: "black" }}>{product.price} $</span>
          </div>

          <div className="cart-sub">
            <p style={{ color: "#630f89", margin: 0 }}>Precio Total</p>
            <span style={{ color: "black" }}>
              {Number(product.quantity) * Number(product.price)} $
            </span>
          </div>

          <div className="d-flex gap-2 mt-2">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={deleteOneFromCart}
              title="Quitar una unidad"
            >
              <BsDashCircle /> Quitar
            </Button>

            <Button
              variant="outline-danger"
              size="sm"
              onClick={deleteAllFromCart}
              title="Eliminar producto"
            >
              <BsTrash /> Eliminar
            </Button>
          </div>
        </BootstrapCard.Body>
      </div>
    </BootstrapCard>
  );
}

export default CartCard;
