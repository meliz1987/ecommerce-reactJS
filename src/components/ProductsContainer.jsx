import { useEffect, useState } from "react";
import "../styles/product.css";
import Card from "./Card";
import loadingGif from "../assets/loadingSpinner.gif";
import { Helmet } from "react-helmet-async";
import { TbMoodSad2 } from "react-icons/tb";
import Footer from "./Footer";

function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

//scroll arriba
  useEffect(() => {
  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  // Paginador
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://68100d8c27f2fdac24101f1f.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setError("Hubo un problema al cargar los productos.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <img src={loadingGif} alt="Cargando..." className="loading-gif" />
        <h3 className ="cute-title">Cargando productos...</h3>
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  // Filtro de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginación sobre resultados filtrados
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexFirstProduct, indexLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = (numberPage) => {
    setCurrentPage(numberPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


  return (
    <>
      <Helmet>
        <title>Catálogo de productos | Pinicrochet</title>
        <meta name="description" content="Explorá todos nuestros amigurumis disponibles." />
      </Helmet>

      <h2 className="text-center mt-4 cute-title">&#128269;Explorá nuestras creaciones &#128269;</h2>
      <br/>

      {/* Barra de búsqueda */}
      <div className="mb-4 text-center">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Buscar producto por nombre..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reinicia la paginación al buscar
          }}
        />
      </div>

      {/* Productos filtrados y paginados */}
      <div className="products-container d-flex flex-wrap justify-content-center mt-3">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          //<p className="text-center cute-title">No se encontraron productos.</p>
          <p className="text-center cute-title mt-4">No se encontraron productos
    <TbMoodSad2 size={40} color="#4f4ba1" className="mb-2" /> <br /> </p>
        )}
      </div>

      {/* Paginador */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center my-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`btn mx-1 ${currentPage === index + 1 ? "btn-pag-active" : "btn-pag-inactive"}`}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {showScrollButton && (
  <button
    onClick={scrollToTop}
    className="btn btn-primary"
    style={{
      position: "fixed",
      bottom: "30px",
      right: "30px",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      fontSize: "1.5rem",
      zIndex: 1000,
      backgroundColor: "#6f57cf",
      borderColor: "#6f57cf",
      color: "white",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
    }}
  >
    ↑
  </button>
)}

<Footer />
    </>
  );
}

export default ProductsContainer;
