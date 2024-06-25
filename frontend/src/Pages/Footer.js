import React, { useState } from 'react'
import '../Assets/Style/Footer.css'
import axios from 'axios'

import { Link } from 'react-router-dom'
export default function Footer() {
  const [data, setdata] = useState({});
  const handleinput = (e) => {
    setdata({
      ...data, [e.target.name]: e.target.value
    })
  }

  const submit = () => {
    if (data.name !== undefined && data.email !== undefined && data.textarea !== undefined) {
      axios.post("http://localhost:4000/contactform", { data }).then((res) => {
        alert(res.data);
        window.location.reload();
      }).catch((error) => {
        console.log(error)
      })
    } else {
      alert("please enter data")
    }
  }

  return (
    <>
      <section className="footer">
        <div className="footer-1">
          <h5 className="footer-1-h5-1">#CONTACT INFO</h5>
          <h1 className="footer-1-h2-1">Any Question?</h1>
          <p className="footer-1-p-1">Methods and techniques to taking raw data - mining for insights and years of experience.</p><hr className='footer-hr' />
          {/* <div className="footer-1-div-1"><i class="fa-solid fa-location-dot"></i></div> */}
          <div className="footer-1-div-1"><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp; nomi.bsit@gmail.com</div><hr className='footer-hr' />
          <div className="footer-1-div-1"><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;+92 315 5393639</div>
        </div>
        <div className="footer-1" id='contact'>
          <h5 className="footer-1-h5-1">GET IN TOUCH</h5>
          <h1 className="footer-1-h2-1">Contact Us</h1>
          <input type="text" className="footer-input" placeholder='Enter Name' name='name' onChange={handleinput} />
          <input type="text" className="footer-input" placeholder='Enter Mail' name='email' onChange={handleinput} />
          <textarea id="w3review" className="footer-input" name="textarea" rows="4" cols="50" placeholder='What types of services you want' onChange={handleinput} /><br />
          <button class="btn" onClick={submit}>Submit</button>

        </div>

        <div className="footer-last">
          <p className="copyright">&copy; 2024 Nerox Agency & Portfolio Design. All rights reserved</p>
          <Link className='footer-last-link' target='blank' to="https://www.linkedin.com/in/nomi-developer/"><i class="f-links fa-brands fa-linkedin-in"></i></Link>
          <Link className='footer-last-link' to="https://github.com/ExpertsOrigin" target='blank'><i class="f-links fa-brands fa-github"></i></Link>

        </div>
      </section>

    </>


  )
}
