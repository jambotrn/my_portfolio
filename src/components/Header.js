
function  Header(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/skamirul-webdeveloper.png" alt="Avatar Logo" 
            style={{width:100 + 'px'}} className="rounded-pill" /> 
          </a>
        </div>
        <div className="container nav-tab" >
          <ul className="navbar-nav" >
            <li className="nav-item" >
              <a className="nav-link " href="#about">About</a>
            </li>
           <li className="nav-item">
              <a className="nav-link" href="#" >Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" >Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" >Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" >Disabled</a>
            </li>
          </ul>
          </div>
      </nav> 
    )
}

export default Header;