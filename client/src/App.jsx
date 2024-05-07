import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Register from './components/Register'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </>
  )
}

export default App
