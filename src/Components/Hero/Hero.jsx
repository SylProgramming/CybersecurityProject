import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Better privacy for the digital world</h1>
            <p>Shield your digital world with our advanced antivirus 
                protection. Our cutting-edge technology detects and neutralizes malware, viruses, 
                and cyber threats before they can harm your devices or compromise your data. With real-time scanning and intelligent threat detection, you can browse, 
                and connect online with confidence, knowing that your cybersecurity is in expert hands. Stay one step ahead of cybercriminals and safeguard your digital 
                life with our powerful antivirus solution.
                <p></p>
              <button className='btn'>Explore more <img src={dark_arrow} alt ="" /></button>
            </p>
        </div>
    </div>
  )
}

export default Hero