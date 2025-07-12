import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { executeBasicSweet } from "../assets/SweetAlert";
import { addProduct, updateProduct } from '../assets/requests';
import { useAuthContext } from '../contexts/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import "../styles/login.css";
import { ProductsContext } from "../contexts/ProductsContext";
import Footer from './Footer';

function ProductForm({ mode = "create", initialData = null, onSubmit }) {
  const { admin } = useAuthContext();
  const { addProduct: addToContext, editProduct: editInContext } = useContext(ProductsContext);

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setProduct(initialData);
    }
  }, [initialData, mode]);

  const validateForm = () => {
    if (!product.name.trim()) return "El nombre es obligatorio.";
    if (!product.price || product.price <= 0) return "El precio debe ser mayor a 0.";
    if (!product.description.trim() || product.description.length < 10) return "La descripción debe tener al menos 10 caracteres.";
    if (!product.image.trim()) return "La URL de la imagen no debe estar vacía.";
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = validateForm();
    if (valid !== true) {
      executeBasicSweet("Error en el formulario", valid, "error", "Cerrar");
      return;
    }

    try {
      if (mode === "edit") {
        const updated = await updateProduct(product.id, product);
        editInContext(updated); // sincroniza con contexto global
        executeBasicSweet("Producto actualizado", "Los cambios fueron guardados", "success", "Cerrar");
        onSubmit?.(updated);
      } else {
        const newProduct = await addProduct(product);
        addToContext(newProduct); // sincroniza con contexto global
        executeBasicSweet("Producto agregado", "Se agregó correctamente", "success", "Cerrar");
        setProduct({ name: '', price: '', description: '', image: '' });
        onSubmit?.(newProduct);
      }
    } catch (error) {
      executeBasicSweet("Error", error.message || "Ocurrió un problema", "error", "Cerrar");
    }
  };

  if (!admin) return <Navigate to="/login" replace />;

  return (
    <div>
    <Container className="d-flex justify-content-center align-items-center mt-4">
      <Card className="login-card p-4" style={{ width: '100%', maxWidth: '600px' }}>
        <div className="card-header text-center">
          <h3>{mode === "edit" ? "Editar Producto" : "Agregar Producto"}</h3>
        </div>
        <Form onSubmit={handleSubmit} className="mt-3">
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Nombre del producto"
              required
            />
          </Form.Group>

          <Form.Group controlId="image" className="mb-3">
            <Form.Label>URL de la Imagen</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="https://..."
              required
            />
            {product.image.trim() && (
              <div className="text-center mt-3">
                <img
                  src={product.image}
                  alt="Vista previa"
                  style={{
                    height: '120px',
                    width: '120px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    border: '2px solid white',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                  }}
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
            )}
          </Form.Group>

          <Form.Group controlId="price" className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              min="0"
              required
            />
          </Form.Group>

          <Form.Group controlId="description" className="mb-4">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={product.description}
              onChange={handleChange}
              rows={3}
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center">
            <Link to="/productos" className="btn btn-secondary">
              Volver al catálogo
            </Link>
            <Button variant="primary" type="submit" className="btn">
              {mode === "edit" ? "Actualizar Producto" : "Agregar Producto"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>

   </div>
   
  );
}

export default ProductForm;
