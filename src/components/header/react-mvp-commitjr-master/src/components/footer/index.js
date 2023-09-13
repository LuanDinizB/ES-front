import React from "react";
import "./style.css"

function Footer() {
    return(
      <div>
      <footer class="bg-dark text-center text-white">
        <div class="text-center p-3" style={{ backgroundColor: (0, 0, 0, 0.2) }}>
          Produzido por Fernando Henrique
        
        
        </div>
        <a className="commit" style={{color: '#5c6bc0'}}>Commit Jr.</a>
      </footer>
    </div>
    );
  }

  export default Footer;