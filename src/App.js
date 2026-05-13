import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About';
import Error from './Pages/Error';
import Contact from './Pages/Contact';
import Footer from './Component/Footer';

const App = () => {
  return (
    <Router>
      <Navbar text={'mayanK'}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
