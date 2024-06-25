import './App.css';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Navbar from './Pages/Navbarmenu'
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
<Route index element={<Home/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/projects' element={<Projects/>} />



    </Routes>
<Footer/>
    
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
