import React from 'react'
import '../Assets/Style/Contact.css'
export default function Contact() {
  return (
    <>
      <div className="contact-header">
        <div className="emptydiv"></div>
        <div className="contact-header-text">
          <h4 className="header-h4-1">Contact</h4>
          <h2 className="header-h2-1">Please Use Contact Form</h2>
          <h2 className="header-h2-1">In Bellow</h2>
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
        <input className='contact-form-input' type="text" placeholder="What's Your Name ?" />
        <input className='contact-form-input' type="text" placeholder="What's Your Email Address ?" />
        <input className='contact-form-input' type="text" placeholder="What's Your Phone No ?" />
        <label htmlFor=""><p className="question-p">What type of Services you are looking for ?</p> <br />
          <input className='chekcbox1' type="checkbox" />&nbsp;<label htmlFor="">Web Design</label>
          <input className='chekcbox' type="checkbox" />&nbsp;<label htmlFor="">Web Development</label>
          <input className='chekcbox' type="checkbox" />&nbsp;<label htmlFor="">eCommerce</label>
          <input className='chekcbox' type="checkbox" />&nbsp;<label htmlFor="">Bug Fixing</label> <br />
          <input className='contact-form-input last-input' type="text" placeholder='Tell me about your project ?' />
          <button className="contact-form-btn">Submit Message</button>
        </label>

      </section>



    </>
  )
}
