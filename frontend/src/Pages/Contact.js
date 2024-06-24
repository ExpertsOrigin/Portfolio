import React, { useState } from 'react'
import '../Assets/Style/Contact.css'
import axios from 'axios'
export default function Contact() {
const [data,setdata] = useState({});
const handleinput = (e)=>{
setdata({
  ...data, [e.target.name]:e.target.value
})
}

const submit = ()=>{
  if(data.name !== undefined && data.email !== undefined && data.phone !== undefined && data.textarea !== undefined){
    axios.post("http://localhost:4000/contactform",{data}).then((res)=>{
    alert(res.data);
    window.location.reload();
    }).catch((error)=>{
    console.log(error)
    })
  }else{
    alert("please enter data")
  }
}

  return (
    <>
      <div className="contact-header">
        <div className="emptydiv"></div>
        <div className="contact-header-text">
          <h4 className="header-h4-1">Let's Talk</h4>
          <h2 className="header-h2-1">We're Here to Help</h2>
          <h3 className="header-h2-1">Reach Out Today</h3>
        </div>
      </div>

      <section className="social-section">
        <div className="social-1"><i class="fa-solid contact-social-icons fa-phone-volume"></i><h3 className="social-h3-1">Phone Number</h3><p className="social-p-1">+92 315 539 3639</p></div>
        <div className="social-1"><i class="fa-solid contact-social-icons fa-envelope"></i><h3 className="social-h3-1">Email Address</h3><p className="social-p-1">nomi.bsit@gmail.com</p></div>
        <div className="social-1"><i class="fa-solid contact-social-icons fa-location-crosshairs"></i><h3 className="social-h3-1">Location</h3><p className="social-p-1">Rawalpindi, Pakistan</p></div>
        <div className="social-1"><i class="fa-regular contact-social-icons fa-clock"></i><h3 className="social-h3-1">Working Hours</h3><p className="social-p-1">08 AM - 10 PM</p></div>
      </section>

      <section className="contact-form">
        <h3 className="form-h3-1">Get In Touch</h3>
        <input className='contact-form-input' name='name' type="text" placeholder="What's Your Name ?" onChange={handleinput}  />
        <input className='contact-form-input' name='email' type="text" placeholder="What's Your Email Address ?" onChange={handleinput} />
        <input className='contact-form-input' name='phone' type="text" placeholder="What's Your Phone No ?" onChange={handleinput} />
        <label htmlFor=""><p className="question-p">What type of Services you are looking for ?</p> <br />
          <input className='chekcbox1' name='webdesign'  type="checkbox" />&nbsp;<label htmlFor="">Web Design</label>
          <input className='chekcbox'  name='webdev' type="checkbox" />&nbsp;<label htmlFor="">Web Development</label>
          <input className='chekcbox'  name='ecommerce' type="checkbox" />&nbsp;<label htmlFor="">eCommerce</label>
          <input className='chekcbox'  name='bugfixing' type="checkbox" />&nbsp;<label htmlFor="">Bug Fixing</label> <br />
          <input className='contact-form-input last-input' name='textarea' type="text" placeholder='Tell me about your project ?' onChange={handleinput} />
          <button className="contact-form-btn" onClick={submit}>Submit Message</button>
        </label>

      </section>



    </>
  )
}
