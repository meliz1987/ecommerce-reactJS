import { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../styles/product.css";
import Card from "./Card"; 
import { Helmet } from "react-helmet-async";
import  "../App.css";
import Footer from "./Footer";
import { TbMoodSad2 } from "react-icons/tb";

function Main() {
  const images = [
    "/gallery/img1.png",
    "/gallery/img2.png",
    "/gallery/img3.png",
    "/gallery/img4.png",
    "/gallery/img5.png"
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    fetch("https://68100d8c27f2fdac24101f1f.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
      })
      .catch((err) => console.error("Error al buscar:", err));
  }, [searchTerm]);

  return (
    <main className="py-4 text-center">
      <Helmet>
        <title>Inicio | Pinicrochet</title>
        <meta name="description"    content="Descubrí amigurumis únicos hechos con amor y dedicación." />
      </Helmet>
      <h2 className="cute-title">&#128075; ¡Bienvenidos a Pinicrochet! &#128075;</h2>
      <h3 className="mb-4 px-3">
        En este espacio lleno de creatividad vas a encontrar amigurumis únicos, hechos con gran dedicación. 
        Cada pieza es diseñada con amor y atención a cada detalle, ideal para regalar, decorar o coleccionar. 🎁
      </h3>
           <div className="mx-auto" style={{ maxWidth: "400px" }}>
        <Carousel>
          {images.map((src, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={src}
                alt={`Amigurumi ${index + 1}`}
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Barra de búsqueda */}
      <div className="search-wrapper mt-5 mb-4">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Buscar producto por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Resultados de búsqueda */}
      {searchTerm && (
        <div className="products-container mt-4 d-flex flex-wrap justify-content-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
           // <p className="cute-title">No se encontraron productos.</p>
           <p className="text-center cute-title mt-4">No se encontraron productos
               <TbMoodSad2 size={40} color="#4f4ba1" className="mb-2" /> <br /> </p>
          )}
        </div>
      )}
    </main>
  );
}

export default Main;