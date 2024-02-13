import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./NavBar.module.css"
const NavBar=()=>{
  function activeLink({isActive}){
    if (isActive) {
      return {backgroundColor:`#1abc9ce6`}
      
    }
  }
    return(<>
<nav className={`navbar ${style.nav} p-4 navbar-expand-lg  fixed-top navbar-dark`}>
  <div className="container">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <Link className="nav-link" to={"home"}><h2 className="text-white fw-bolder">START FRAMEWORK</h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item p-2 me-2">
          <NavLink style={activeLink} className="nav-link active fs-6 fw-bolder" to={"about"}>ABOUT</NavLink>
        </li>
        <li className="nav-item p-2 me-2">
          <NavLink style={activeLink} className="nav-link active fs-6 fw-bolder" to={"portfolio"}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item p-2 me-2">
          <NavLink style={activeLink} className="nav-link active fs-6 fw-bolder" to={"contact"}>CONTACT</NavLink>
        </li>
       
        
        
      </ul>
      
    </div>
  </div>
</nav>

    </>)
}
export default NavBar;