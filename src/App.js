import React from 'react';

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';


import{Routes, Route} from 'react-router-dom'

function App(){
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/contact' element={<Contact />}/>

      </Routes>
    </>
  )
}

export default App;