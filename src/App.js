import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Categorias from './components/Categorias';
import { cleanup } from '@testing-library/react';
import Characters from './components/Articulos';
import Normas from './components/Normas';



function App() {

  const [character, setCharacters] = useState ([]);
  
  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
  .then(response => response.json())
  .then(data => setCharacters(data.results))
  .catch(error => console.log(error))
  }

  useEffect(()=> {
     fetchCharacters(initialUrl);
  }, [])

  return (
    <BrowserRouter>

    
           <header> <Header/> </header>
          <div> <NavBar/> </div>
         {/*   <Categorias/>  */}
           <Routes>
             <Route path='/' element={<Categorias/> }/>
           </Routes>
           

          <Routes>
            <Route path="/normas" element={<Normas/>}/>
          </Routes>
          
          <Routes>
            <Route path='/' element={<div className='container mt-5'> <Characters characters={character}/> </div>}/>                
          </Routes>
         

    </BrowserRouter>
  
  )
}

export default App;
