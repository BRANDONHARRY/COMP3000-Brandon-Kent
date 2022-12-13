import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';

import{Routes, Route} from 'react-router-dom';

function App(){
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/about' element={<About />}/>

      </Routes>
    </>
  )
}

export default App;