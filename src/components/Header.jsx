import banner from "/banner.gif"
import "../index.css"

function Header() {  
    return (  
       // <header style={{ backgroundColor: " #A682EE", padding: "10px", textAlign: "center", color: "white" }}>  
          <header>
             <img src={banner} alt="banner e-commerce" />
        </header>  
    );  
}  

export default Header