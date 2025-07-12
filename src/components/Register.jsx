import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUser } from '../auth/firebase';
import { useAuthContext } from '../contexts/AuthContext';
import { executeBasicSweet } from "../assets/SweetAlert";
import '../styles/login.css';
import Footer from "./Footer";

function Register() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    createUser(usuario, password)
      .then((user) => {
        login(usuario);
        executeBasicSweet("¡Listo!", "Usuario registrado correctamente", "success", "Ok");
        navigate("/"); // O redirigí a /login si preferís
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          executeBasicSweet("Oops!", "Credenciales incorrectas", "error", "Cerrar");
        } else if (error.code === "auth/weak-password") {
          executeBasicSweet("Contraseña débil", "La contraseña debe tener mínimo 6 caracteres", "error", "Cerrar");
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm register-card">
            <div className="card-header">
              <h4 className="mb-0">Crear cuenta</h4>
            </div>
            <div className="card-body">
              <form onSubmit={registerUser}>
                <div className="mb-3">
                  <label className="form-label">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                    placeholder="ejemplo@gmail.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Registrarse
                </button>
              </form>
              <div className="mt-3 text-center">
                ¿Ya tenés cuenta?{" "}
                <Link to="/login" className="text-white fw-bold text-decoration-underline">
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  );
}

export default Register;
