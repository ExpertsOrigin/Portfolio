import React from 'react'
import '../Assets/Style/Projects.css'
export default function Projects() {
  return (
<>
<h1 className="projects-h1">Successful Projects</h1>
<section className="allprojects">
<div className="latest">
                    <div className="latest-cards"><img src={require("../Assets/Images/fruitables.png")} alt="" /> <h6 className="latest-h5">#WEB DESIGN</h6><h3 className="latest-h2">Trendy Minimal Headphone Branding</h3><i class="fi fi-ts-arrow-right rightarrow"></i></div>
                    <div className="latest-cards"><img src={require("../Assets/Images/getstark.png")} alt="" /> <h6 className="latest-h5">#WEB DESIGN</h6><h3 className="latest-h2">Trendy Minimal Headphone Branding</h3><i class="fi fi-ts-arrow-right rightarrow"></i></div>
                    <div className="latest-cards"><img src={require("../Assets/Images/basicdept.png")} alt="" /> <h6 className="latest-h5">#WEB DESIGN</h6><h3 className="latest-h2">Trendy Minimal Headphone Branding</h3><i class="fi fi-ts-arrow-right rightarrow"></i></div>
                </div>
</section>


</>
  )
}
