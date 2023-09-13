import React from "react";
import NavbarComponent from 'react-bootstrap/Navbar';
import "./style.css"
import linkLancamento from '../lançamentos/index'
import linkDestaques from "../destaques/index"

function NavBar() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a id="a10" class="navbar-brand" href="#">BeiraMar</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a href="http://localhost:3000/#here" class="nav-link active" aria-current="page">Lançamentos</a>
                </li>
                <li class="nav-item">
                  <a href="http://localhost:3000/#here1" class="nav-link">Destaques</a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>

    );
  }

  export default NavBar;