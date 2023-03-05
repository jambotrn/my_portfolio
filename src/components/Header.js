import { useState } from "react";

function  Header(){
const [scroll, setScroll]= useState(false);

const chHeader = ()=>{
 if(window.scrollY > 100){
  setScroll(true)
 }else{
  setScroll(false)
 }
}
window.addEventListener("scroll",chHeader);

    return(
        <nav className={scroll ? 'navbar navbar-expand-sm sticky-top' : 'navbar navbar-expand-sm '} >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/skamirul-webdeveloper.png" alt="Avatar Logo" 
            style={{width:100 + 'px'}} className="rounded-pill" /> 
          </a>
        </div>
        <div className="container nav-tab" >
          <ul className="navbar-nav" >
            <li className="nav-item" >
              <a className="nav-link " href="/#about-skamirul">About</a>
            </li>
           <li className="nav-item">
              <a className="nav-link" href="/#letest-work-of-skamirul" >Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact-to-skamirul" >Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" >Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" ></a>
            </li>
          </ul>
          </div>
      </nav> 
    )
}

export default Header;