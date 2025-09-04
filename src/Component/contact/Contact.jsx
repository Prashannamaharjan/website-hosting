import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_img from '../../assets/mail-icon.png'
import phoneno_img from '../../assets/phone-icon.png'
import Location_img from '../../assets/location-icon.png'

const Contact = () => {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "75e2f172-f44f-4deb-a1dc-8b70bb013f46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      {/* <h1>Contact</h1> */}
      <div className='contact'>
        <div className='contact-col'>
          <h3> Send Me a Message <img src={msg_icon} alt="" /></h3>
          <p>I would love to hear from you! Whether you have a project in mind, want to collaborate, or simply wish to connect, feel free to reach out to me. You can contact me through email or social media, and I’ll get back to you as soon as possible. Let’s connect and create something amazing together!</p>
          <ul>
            <li><img src={mail_img} alt="" />prashannamaharjan13@gmail.com</li>
            <li><img src={phoneno_img} alt="" />9843958426</li>
            <li><img src={Location_img} alt="" />Kiritpur-09, Kathmnandu, Nepal</li>
          </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label >Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required />
            <label >Phone No.</label>
            <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
            <label >Write your message here</label>
            <textarea name='message'rows={6} placeholder='Enter Your Message' required></textarea>
            <button type='submit' className='btn dark-btn' >Submit Now</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>

  )
}

export default Contact