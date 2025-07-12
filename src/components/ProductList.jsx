import React, { useEffect, useState } from 'react';
import Footer from "../components/Footer";

function ProductsList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const answer = await fetch('https://68100d8c27f2fdac24101f1f.mockapi.io/products');
        if (!answer.ok) {
          throw new Error('Error al obtener los productos.');
        }
        const data = await answer.json();
        setProducts(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className ="cute-title">Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>: ${product.price}
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
    
    
  );
}
export default ProductsList;