import { FaGithub, FaTwitter, FaLinkedin  } from "react-icons/fa";


function Contact(){
    return(
        <div className="container-fluid contact-cont" >
            <div className="row contact-r" >
            <h2 >Get in Touch</h2>
            <div className="col-sm-4 contact" >
                <h4 className="contact-heading">
                Want to work together or have any questions?
            </h4>
                <h5 >
                <br />Please feel free to Contact me via social media or Send me an email. 
                I will get back to you as soon as possible.
                </h5>
            </div>
            <div className="col-sm-3 contact"  >
                <h4 className="contact-heading">Email Address</h4>
            <p className="email" style={{fontSize: 20 + 'px'}}> <a href="skamirul980@gmail.com">skamirul980@gmail.com</a> </p>
            </div>
            <div className="col-sm-4 contact socioal-icon" >
                <h4 className="contact-heading" style={{paddingLeft: 16 + 'px'}}>Social Link</h4>
                <ul>
                    <li><a className="btn btn-primary github"  href="https://github.com/jambotrn" target="_blank" role="button">
                    <FaGithub />
                    </a></li>

                    <li><a className="btn btn-primary linkedin" href="https://www.linkedin.com/in/skamirul/" target="_blank" role="button">
                    <FaLinkedin />
                    </a></li>

                    <li><a className="btn btn-primary twitter"  href="https://twitter.com/skamir33758412" target="_blank" role="button">
                    <FaTwitter /></a></li>
                </ul>
            </div>
        
            </div>
        </div>
    )
}

export default Contact