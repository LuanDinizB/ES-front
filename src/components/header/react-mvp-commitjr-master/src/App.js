/* eslint-disable jsx-a11y/alt-text */
//import './App.css';
import icon from "./image/instagram.png";
import Footer from "./components/footer/index.js";
import NavBar from "./components/navBar/index.js";
import Lançamentos from "./components/lançamentos/index.js";
import Destaques from "./components/destaques";
import GetMovie from "./APIs/GETMovie";
import React, {useState, useEffect} from "react";

function App() {

  return (
    <div>
    <NavBar />
    <Lançamentos/>
    <Destaques/>
    <Footer />
    </div>
  );
}

export default App;
