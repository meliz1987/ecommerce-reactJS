import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./contexts/CartContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import { HelmetProvider } from "react-helmet-async"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <CartProvider>
        <ProductsProvider> 
          <App />
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
