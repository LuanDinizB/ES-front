import './App.css';
import Container from '@mui/material/Container';
import React from 'react';
import Header from './components/header/index.js';
import Footer from './components/footer';
import Lancamentos from './components/lancamentos';
import Selecao from './components/destaques/selecao';
import {Destaques} from './components/destaques';


function App() {
  return (
    <div className="App">  
      <Header></Header>   
      <Lancamentos></Lancamentos>
      <Container class="container2">              
      <Destaques></Destaques>
      </Container>
      <Footer></Footer>     
    </div>
  );
}

export default App;

