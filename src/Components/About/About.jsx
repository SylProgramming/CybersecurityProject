import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img' />
            
        </div>
        <div className="about-right">
            <h3>ABOUT THE ANTIVIRUS</h3>
            <h2>Protecting the Digital Landscape Today</h2>
            <p>An ambitious endeavor aimed at revolutionizing digital security in an increasingly interconnected world.
            boasts cutting-edge features designed to combat the ever-evolving landscape of malware and cyber threats.
            Shield can proactively detect and neutralize malware before it can wreak havoc on users' systems. 
            Its real-time scanning engine constantly monitors system activity, swiftly identifying and quarantining suspicious files and processes. 
            Moreover, Sentinel Shield prioritizes user privacy, employing encryption protocols to safeguard sensitive data from prying eyes.
            </p>
            <p>With regular updates and continuous improvement efforts, this antivirus project remains at the forefront of cybersecurity innovation, 
                providing users with peace of mind in an increasingly digital world. In the bustling ecosystem of a college campus, where the exchange of information and ideas is as 
                commonplace as the sunrise, the implementation of an antivirus project emerges as a crucial sentinel, safeguarding the digital infrastructure upon which academic pursuits 
                thrive. With the ever-growing reliance on digital platforms for learning, communication, and collaboration, the threat of malware and cyber attacks looms ominously, 
                ready to disrupt the flow of knowledge and compromise sensitive data.</p>
            <p>Thus, in the dynamic landscape of higher education, this antivirus emerges not just as a utility but as an indispensable ally, fortifying the digital 
                infrastructure and fostering an environment where learning can flourish unimpeded by the shadows of cyber insecurity.</p>
        </div>
    </div>
  )
}

export default About