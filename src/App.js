import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Login from './pages/Login';


import{Routes, Route} from 'react-router-dom';

function App(){
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>

      </Routes>
    </>
  )
}

export default App;