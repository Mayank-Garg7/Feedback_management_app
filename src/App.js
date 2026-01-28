import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About';
import Error from './Pages/Error';
import Connect from './Pages/Connect';

const App = () => {
  return (
    <Router>
      <Navbar text={'mayanK'}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Connect />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
