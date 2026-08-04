import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Products from '../../Components/Products/Products'
import Title from '../../Components/Title/Title'

import ImpactHero from '../../Components/Impact/ImpactHero'
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs'
import Contact from '../../Components/Contact/Contact'

import JoinUs from '../../JoinUs/JoinUs'
import Services from '../../Components/services/services'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'
import RatesFees from '../../RatesFees/RatesFees'
import FAQ from '../../Components/FAQ/FAQ'



const Home = () => {
  return (
    <div>
      <Hero />
      
       <title/>

      <div className="container">
        
        
        
        <Services/>
<WhyChooseUs/>
{/* <div className='Board of member'>
            <ImpactHero/>
        </div> */}
        <HowItWorks/>
        <RatesFees/>
        <FAQ/>
       <Contact/>
       <JoinUs/>
      </div>
    </div>
  )
}

export default Home
