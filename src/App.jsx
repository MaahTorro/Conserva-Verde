import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react'
import React from 'react';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';


export default function App() {

  return (

    <>

  <BrowserRouter>
    <Routes>

    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/sobre' element={<Sobre/>}/>
    <Route exact path='/projetos' element={<Projetos/>}/>
    <Route exact path='/contato' element={<Contato/>}/>

    </Routes>
  </BrowserRouter>

    </>
    
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);