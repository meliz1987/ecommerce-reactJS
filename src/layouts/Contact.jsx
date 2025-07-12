import "../styles/contact.css";
import { Helmet } from "react-helmet-async";
import  "../App.css";
import Footer from "../components/Footer";


function Contact() {
  return (
    <>
      <Helmet>
        <title>Contacto | Pinicrochet</title>
        <meta name="description" content="Contactanos, estamos a tu disposición." />
      </Helmet>

      <div className="container mt-5 mb-5">
        <h2 className="text-center mb-4 cute-title">🤝 Ponete en contacto con nosotros</h2>

        <p className="text-center">
          Si tenés alguna pregunta, querés un amigurumi personalizado o simplemente charlar sobre nuestras creaciones, ¡no dudes en escribirnos!
        </p>

        <h3 className="mt-5 cute-title">📧 Envianos un mensaje</h3>
        <p>Completá el siguiente formulario y te responderemos lo antes posible.</p>

        {/* Formulario conectado a Formspree */}
        <form
          className="contact-form"
          action="https://formspree.io/f/xeoqjpgo" //
          method="POST"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre:</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje:</label>
            <textarea className="form-control" id="message" name="message" rows="4" required />
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>

        <h3 className="mt-5 cute-title">🚶‍♂️ Visitanos en nuestra tienda</h3>
        <p>Si estás cerca, ¡será un gusto conocerte en persona! Nos encontramos en:</p>
        <p><strong>Dirección:</strong> Las Magnolias 754 (Shopping Palmas del Pilar), local 15</p>

        <div className="map mb-4 text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.230914912367!2d-58.87303848813515!3d-34.44628577289852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9c5713587819%3A0x39ea2834d34ffd98!2sPalmas%20del%20Pilar!5e0!3m2!1ses-419!2sar!4v1728914194369!5m2!1ses-419!2sar"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Pinicrochet"
          ></iframe>
        </div>

        <h3 className="mt-4 cute-title">💻 Otras formas de contactarnos</h3>
        <p>
          También podés encontrarnos en nuestras redes sociales o enviarnos un email a{" "}
          <strong>pinicrochet@gmail.com</strong>
        </p>

        <p className="text-center mt-5 cute-title">
          ¡Gracias por elegirnos para acompañarte en este viaje de crochet y amigurumis!
        </p>

      </div>
      <Footer />  
    </>
  );
}

export default Contact;
