import React from "react";
import styleAbout from "./About.module.css"
const About = () => {
    return (<>
        <div className={`${styleAbout.about}  d-flex text-white justify-content-center align-items-center flex-column `}>
            <h2 className="mb-3">ABOUT COMPONENT</h2>
            <div className={`${styleAbout.Aicon} mb-3`}>
                <i class={` fa-solid fa-star  `}></i>
            </div>
            <div className="row  container px-5">
                <div className="col-md-6 ps-md-5 ">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6 ps-md-5 ">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </>)
}
export default About;