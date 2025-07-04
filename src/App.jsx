import React from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Applayout from './Applayout';
import Usestate from './components/Usestate';


const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/'element={<Applayout/>}>
      <Route path='count' element={<Usestate/>}></Route>
      <Route path="/"element={<Home/>}></Route>
      <Route path="/about"element={<About/>}></Route>
      <Route path="/contact"element={<Contact/>}></Route>
      <Route path="/services"element={<Services/>}></Route>
      </Route>
      <Route path="/login"element={<Login/>}></Route>
      <Route path="/register"element={<Register/>}></Route>
    </Routes>
  
    </BrowserRouter>
    
    </>
  )
}

export default App

