import image from "/pini_amigu.png"
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { Container } from "react-bootstrap";
import  "../App.css";



function About(){
    return(
        
       <>
        <Helmet>
        <title>Nosotros | Pinicrochet</title>
        <meta name="description" content="Nuestra historia." />
      </Helmet>
       
          <Container className="mt-5">
       <h2 className="text-center mb-4 cute-title">&#128587; Sobre Nosotros &#128587;</h2>
       <p>En Pinicrochet, cada amigurumi es una pieza hecha con el corazón. Lo que comenzó como un hobby durante la pandemia en 2020, se convirtió rápidamente en una pasión. Aprendí crochet de forma autodidacta y comencé a compartir mis creaciones en redees sociales, recibiendo el apoyo de internautas que interactuaba a través de likes o comentarios en cada foto de amigurumi posteada.</p>
       <br/>
       <p>El nombre <i>Pinicrochet</i> tiene un significado muy especial: "Pini" es el nombre de mi perra, mi fiel compañera los últimos 10 años que me complementa con su compañía en cada proyecto a emprender. Su forma de ser adorable y tierna me inspiró a fusionar su nombre con "crochet", ya que aprendí a tejer amigurumis con el mismo amor y dulzura que ella transmite.</p>
       <br/>
       <p>Te invitamos a conocer nuestro mundo de amigurumis con alma, hechos con amor, ternura y una pizca de inspiración canina.&#128054;&#x1F9F6;</p>
       
      
       <img src={image} alt="Pini y amigurumi" className="img-fluid rounded shadow-sm d-block mx-auto mt-4"
  style={{ width: "300px", borderRadius: "15px", transition: "transform 0.3s ease",  boxShadow: "0 4px 8px rgba(0,0,0,0.2)", cursor: "pointer" }}
  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
/>

</Container>
<div>
  <Footer />
</div>

       </>
       
    )
}

export default About