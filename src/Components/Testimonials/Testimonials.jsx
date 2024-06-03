import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform =`translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform =`translateX(${tx}%)`;
}
  return (
    <div className='testimonials'>
        <img src={next_icon} alt=''className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt=''className='back-btn' onClick={slideBackward}/>
        <img src='' alt=''className='naxt-btn'/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>KawaiiGamerUwU</h3>
                                <span>Professional Gamer(Catfish)</span>
                            </div>
                        </div>
                        <p>"As a passionate gamer, my digital world is not just a playground but also a battleground against unseen adversaries. 
                            That's why I rely on Feanality Hub to keep my gaming rig safe from the lurking dangers of malware and cyber attacks. 
                            With its lightweight design and minimal system impact.
                            Its real-time scanning and threat detection capabilities give me the confidence to explore the virtual realms without fear of compromise. 
                           
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Neil Cortez</h3>
                                <span>College Student</span>
                            </div>
                        </div>
                        <p>"As a college student navigating the vast online landscape for research, assignments, and communication, 
                            I've always been concerned about the security of my digital devices. Thankfully, I stumbled upon this Feanality website, 
                            and it has truly been a game-changer for me. With its powerful scanning algorithms and real-time threat detection, I feel confident knowing 
                            that my devices are protected from malware and cyber threats.         
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Ma'am Jhai</h3>
                                <span>Professor, Eastwoods</span>
                            </div>
                        </div>
                        <p>"As a university administrator responsible for maintaining the integrity of our institution's digital infrastructure, 
                            finding the right antivirus solution was paramount.  Its centralized management console allows us to efficiently monitor and manage security 
                            across our campus, ensuring that our students, faculty, and staff can work and learn without interruption. 
                            I wholeheartedly recommend Feanality to any academic institution looking for reliable antivirus protection."
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Julius Balmaceda</h3>
                                <span>College Student</span>
                            </div>
                        </div>
                        <p>"As a humble college student navigating the vast sea of information and deadlines, having a reliable antivirus is an absolute necessity. 
                            That's why I turned to Feanality Antivirus, and it has truly been a lifesaver for me. With its simple interface and seamless operation, 
                            SafeGuard quietly works in the background, keeping my laptop safe from digital threats without slowing down my workflow. I'm immensely grateful for the peace of mind it provides, and I wholeheartedly recommend it to my fellow students."
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials