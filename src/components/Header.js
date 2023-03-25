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
const normalNav='navbar navbar-expand-sm  navbar-dark';
const stickyNav=normalNav +' sticky-top';

window.addEventListener("scroll",chHeader);

    return(
        <nav className={scroll ? stickyNav : normalNav} >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/skamirul-webdeveloper.png" alt="Avatar Logo" 
            style={{width:100 + 'px'}} className="rounded-pill" /> 
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className=" nav-tab collapse navbar-collapse" id="mynavbar" >
          <ul className="navbar-nav " >
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