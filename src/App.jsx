import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import About from '../src/Components/About/about'
import './app.css'
import ProductMain from './Pages/ProductMain'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import Wash from './Components/Wash/Wash'
import Monthly from './Components/Monthly/Monthly'
import Weekly from './Components/Weekly/Weekly'
import Founder from './Components/About/Founder'
import Leadership from './Components/About/Leadership'
import Mission_and_Vision from './Components/About/Mission_and_Vision'

import Resources from './Pages/Resources'
import Contact from './Pages/Contact'
import Branch from './Pages/Branch'
import Emi_Calculator from './Pages/Emi_Calculator'
import ClientStories from './Components/Clientstories/Client-stories'
import Services from './Components/services/services'

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Wash" element={<Wash />} />
          <Route path="/Monthly" element={<Monthly />} />
          <Route path="/Weekly" element={<Weekly />} />
          <Route path="/ProductMain" element={<ProductMain />} />

          <Route path="/Founder" element={<Founder />} />
          <Route path="/Leadership" element={<Leadership />} />
          <Route path="/Mission_and_Vision" element={<Mission_and_Vision />} />
          
          <Route path="/Branch" element={<Branch />} />
          <Route path="/Emi_Calculator" element={<Emi_Calculator />} />

          <Route path="/about" element={<About/>} />
          
          
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/client-stories" element={<ClientStories />} />
           <Route path="/services" element={<Services />} />
           
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
