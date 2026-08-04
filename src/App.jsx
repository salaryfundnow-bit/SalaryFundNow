import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import './app.css'
import ProductMain from './Components/Pages/ProductMain'
import Footer from './Components/Pages/Footer'
import Home from './Components/Pages/Home'
import Wash from './Components/Wash/Wash'
import Monthly from './Components/Monthly/Monthly'
import Weekly from './Components/Weekly/Weekly'
import Founder from './Components/About/Founder'
import Leadership from './Components/About/Leadership'
import Mission_and_Vision from './Components/About/Mission_and_Vision'

import Resources from './Components/Pages/Resources'
import Contact from './Components/Pages/Contact'
import Branch from './Components/Pages/Branch'
import Emi_Calculator from './Components/Pages/Emi_Calculator'
import ClientStories from './Components/Clientstories/Client-stories'
import Services from './Components/services/services'
import LoanApply from './Components/LoanApply/LoanApply'

const App = () => {
  return (
    <BrowserRouter basename="/SalaryFundNow">

      <Navbar />

      <main className="main-content">
        <Routes>

          <Route path="/" element={<Home/>} />

          <Route path="/Wash" element={<Wash />} />
          <Route path="/Monthly" element={<Monthly />} />
          <Route path="/Weekly" element={<Weekly />} />

          <Route path="/ProductMain" element={<ProductMain />} />

          <Route path="/Founder" element={<Founder />} />
          <Route path="/Leadership" element={<Leadership />} />
          <Route path="/Mission_and_Vision" element={<Mission_and_Vision />} />

          <Route path="/Branch" element={<Branch />} />
          <Route path="/Emi_Calculator" element={<Emi_Calculator />} />

          <Route path="/about" element={<About />} />

          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/client-stories" element={<ClientStories />} />
          <Route path="/services" element={<Services />} />

          <Route path="/loanapply" element={<LoanApply />} />

        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  )
}
export default App
