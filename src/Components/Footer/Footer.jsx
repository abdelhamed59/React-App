import React from "react";
import style from './Footer.module.css'
const Footer=()=>{
    return(<>
    <footer className={`${style.all} text-center text-white  `}>
        <div className="row p-5">
            <div className="col-md-4 pb-5 pt-3">
                <h3>LOCATION</h3>
                <p className=" mb-3">2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 pb-5 pt-3">
                <h3>AROUND THE WEB</h3>
                <div className="icons d-flex justify-content-center ">
                <div className={[ style.icon,"d-flex justify-content-center align-items-center me-2"].join(" ")}>
                <i class="fa-brands fa-facebook "></i>
                </div>
                <div className={[ style.icon,"d-flex justify-content-center align-items-center me-2"].join(" ")}>
                <i class="fa-brands fa-twitter"></i>
                </div>
                <div className={[ style.icon,"d-flex justify-content-center align-items-center me-2"].join(" ")}>
                <i class="fa-brands fa-linkedin"></i>
                </div>
                <div className={[ style.icon,"d-flex justify-content-center align-items-center"].join(" ")}>
                <i class="fa-solid fa-globe"></i>
                </div>
               
                </div>
               
            </div>
            <div className="col-md-4 pb-5 pt-3">
                <h3>ABOUT FREELANCER</h3>
                <p className=" mb-2">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                
            </div>
        </div>
       

    </footer>
     <div className={`${style.copyRight}    p-3  text-white w-100`}>
     <p className=" text-center">Copyright © Your Website 2021</p>
 </div>
 </>
    )
}
export default Footer;