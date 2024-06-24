import React from 'react'
import '../Assets/Style/Footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
    
    return (
//         <>
//             <div className="upperdiv">
//                 <h1 className="footer-h1-1">Let's Start Creating Together</h1>
//                 <button className="hire-me-btn">Hire Me</button>
//             </div>

// <div className="otherfooter">
// <div className="lower-div">
//                 <div className="footer-div"><h3 className="footer-div-h3">Follow Me</h3><i class="fa-brands footerlinks fa-linkedin"></i><i class="fa-brands footerlinks fa-github"></i><i class="fa-brands footerlinks fa-facebook"></i></div>
//                 <div className="footer-div"><h3 className="footer-div-h3">Contact Info</h3><h5 className="phoneno">+92 315 5393639</h5><h5 className="phoneno">nomi.bsit@gmail.com</h5></div>
//                 <div className="footer-div"><h3 className="footer-div-h3">Newsletter</h3>
//                     <div class="InputContainer">
//                         <input placeholder="Search.." id="input" class="input" name="text" type="text" />

//                     </div>
//                 </div>

//             </div>
//         <div className="horidiv">
//             <h6 className='footercopy-h6'>Copyright &#169;	 2024 Portfx All rights reserved.</h6>
//             <p className="footer-last-links">
//                 <Link className='last-links'>About</Link>
//                 <Link className='last-links'>Privacy</Link>
//                 <Link className='last-links'>Terms</Link>
//                 <Link className='last-links'>Services</Link>
//                 <Link className='last-links'>Contact</Link>
//                 </p>
//         </div>

// </div>
//         </>

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
    <div className="footer-1">
    <h5 className="footer-1-h5-1">GET IN TOUCH</h5>
    <h1 className="footer-1-h2-1">Let's Say Hi</h1>
    <input type="text" className="footer-input" placeholder='Enter Name' />
    <input type="text" className="footer-input" placeholder='Enter Mail' />
    <textarea id="w3review" className="footer-input" name="w3review" rows="4" cols="50" placeholder='Enter Message Here'/><br />
    <button class="btn">Submit</button>

    </div>

    <div className="footer-last">
        <p className="copyright">&copy; 2024 Nerox Agency & Portfolio Design. All rights reserved</p>
        <Link className='footer-last-link'><i class="f-links fa-brands fa-linkedin-in"></i></Link>
        <Link className='footer-last-link'><i class="f-links fa-brands fa-github"></i></Link>

    </div>
</section>

</>


    )
}
