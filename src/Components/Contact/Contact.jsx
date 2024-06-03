import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe3bdf8c-0853-4700-a222-6b7199b129af");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message<img src={msg_icon} alt="" /></h3>
            <p>
            If you have any questions, concerns, or feedback about our antivirus program, we're here to help. 
            Whether you need technical assistance, want to report a potential threat, or simply want to learn more about our product features, 
            don't hesitate to reach out to us. You can contact us via email at support@antivirusprogram.com or by filling out the contact form on our website. 
            Your satisfaction and security are our top priorities, we look forward to hearing from you and helping you stay protected in the digital world.
            </p>
            <p>&nbsp;
            </p>
            <ul>
                <li><img src={mail_icon} alt=""/>&nbsp;&nbsp;Support@AntivirusProgram.com</li>
                <li><img src={phone_icon} alt=""/>&nbsp;&nbsp;+1 123-456-7890</li>
                <li><img src={location_icon} alt=""/>&nbsp;&nbsp;Bataan, Balanga, Eastwoods 
                Academy<br/> Luzon, Philippines</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
     </div>
    </div>
  )
}

export default Contact