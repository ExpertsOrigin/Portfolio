import React from 'react'
import '../Assets/Style/Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section className="home-header">
                <div className="upper-header">
                    <h3 className="header-h5-1">HI, I AM</h3>
                    <h1 className="header-h1-1">Nouman</h1>
                    <p className="header-p-1">I'm working on a professional, visually Website and technologically proficient, responsive and multi-functional.</p>
                    <button class="shadow__btn">
                        Jump For A QUICK MEETING
                    </button>
                </div>
            </section>

            <section className="section-2">
                <div className="section-2-div">
                    <h1 className="section2-h1-1">I bring trusted solutions for your business</h1>
                    <p className="section-2-p-1">We help our client suceed by creating identities, digital experiences, and printmaterials that communicate clearly, achieve marketing goals, and look fantastic.</p>
                    {/* <p className="section-2-p-1"></p> */}
                </div>
                <div className="section-2-img">
                    <img className='section2-img' src={require("../Assets/Images/section-2-img (1).jpg")} alt="" />
                    <img className='section2-img img2' src={require("../Assets/Images/section-2-img (2).jpg")} alt="" />
                </div>
            </section>
            <hr className="home-hr-1" />

            <section className="section-3">
                <div className="section-3-cards"><img src={require("../Assets/Images/noun-1 (1).png")} alt="" className="card-img" /> <h3 className="cards-h2-1">Web Development</h3> <p className="cards-p-1">Explore cutting-edge web development with modern technologies. Let's build seamless, responsive, and user-friendly websites together. </p> <i class="fi fi-ts-arrow-right rightarrow"></i> </div>
                <div className="section-3-cards"><img src={require("../Assets/Images/noun-1 (2).png")} alt="" className="card-img" /> <h3 className="cards-h2-1">Bug Fixing</h3> <p className="cards-p-1">Got bugs? I've got solutions. how I identify and resolve issues swiftly and efficiently. Let's ensure your website runs flawlessly!</p> <i class="fi fi-ts-arrow-right rightarrow"></i></div>
                <div className="section-3-cards"><img src={require("../Assets/Images/noun-1 (3).png")} alt="" className="card-img" /> <h3 className="cards-h2-1">eCommerce</h3> <p className="cards-p-1">Transform your business with robust e-commerce solutions! Let's boost your online sales together!</p> <i class="fi fi-ts-arrow-right rightarrow"></i></div>
                <div className="section-3-cards"><img src={require("../Assets/Images/noun-1 (4).png")} alt="" className="card-img" />
                    <h3 className="cards-h2-1">Web Design</h3>
                    <p className="cards-p-1">Experience captivating web designs that engage and inspire! Let's make your vision come to life!</p>
                    <i class="fi fi-ts-arrow-right rightarrow"></i>
                </div>
            </section>

            <section className="section-4">
                <div className="section-4-text">
                    <h1 className="text-4-h1-1">Let's Talk</h1>
                    <p className="text-4-p-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero reprehenderit dolorem, obcaecati enim, quo molestias assumenda ducimus asperiores sint ipsa, accusamus laboriosam. Dolores perferendis praesentium explicabo omnis ab minima tempore?</p>
                    <button className="text-btn">Join For A Quick Meeting</button>
                </div>
            </section>

            <section className="latest-work">
                <h1 className="latestwork-h1-1">Latest Works</h1>
                <div className="latest">
                    <div className="latest-cards"><img src={require("../Assets/Images/fruitables.png")} alt="" /> <h6 className="latest-h5">#WEB DESIGN</h6><h3 className="latest-h2">Trendy Minimal Headphone Branding</h3><i class="fi fi-ts-arrow-right rightarrow"></i></div>
                    <div className="latest-cards"><img src={require("../Assets/Images/getstark.png")} alt="" /> <h6 className="latest-h5">#WEB DESIGN</h6><h3 className="latest-h2">Trendy Minimal Headphone Branding</h3><i class="fi fi-ts-arrow-right rightarrow"></i></div>
                    <div className="latest-cards"><img src={require("../Assets/Images/basicdept.png")} alt="" /> <h6 className="latest-h5">#WEB DESIGN</h6><h3 className="latest-h2">Trendy Minimal Headphone Branding</h3><i class="fi fi-ts-arrow-right rightarrow"></i></div>
                <button className="load-more">View All Projects</button>
                </div>

                {/* <div className="latest-more">
            </div> */}
            </section>

            <h1 className="create">Enough Talk, Let's Build Something Unique & Creative</h1>



        </>
    )
}
