import Header from "../Header";
import Footer from "../Footer";
import Contact from "../Contact";

function Workdetail(){

    return(
        <>
        <Header />
            <div className="container work-con">
                <h1 className="heading-span">Magic Job</h1>
                <h3>An online job portal website</h3><br></br><br></br>
                <div className="row">
                    <div className="col-sm-12">
                        <img className="img-fluid work-img" src="/project-img/Magic Job.png" alt="magic job "></img>
                    </div>
                </div>
                <div className="row">
                    <h3 className="heading-span" >Project Overview :</h3>
                    <div className="col-sm-11">
                        <p>
                        Magic Job is an online job portal website. where job seeker finds their dream job 
                        easily without paying any money. It is free
                        for the job seeker to create a profile and upload resume. they can search and 
                        apply for the job as much as they wish according to their skill and qualification.
                        On the magic job, the employer can post their job details and wait for job seeker 
                        applications to the job. they can view the applicant's profile and download their resume.
                        </p>
                        <p>
                        Here magic job works as a great platform where employers and job seekers connect with each other. 
                        The Magic job provides all the facilites and security.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <h3 className="heading-span" >Technologies Used :</h3>
                    <div className="col-sm-11">
                        <ol className="work-skill " >   
                            <li>&nbsp; Html</li>
                            <li>&nbsp; Css</li>
                            <li>&nbsp; Bootstrap</li>
                            <li>&nbsp; Javascript</li>
                            <li>&nbsp; Php / Laravel</li>
                            <li>&nbsp; Ajax</li>
                            <li>&nbsp; Mysql</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <h3 className="heading-span" >Features :</h3>
                    <div className="col-sm-11">
                         <ol  >   
                            <li>&nbsp; Fully <span className="highlight">responsive</span> web pages.</li>
                            <li>&nbsp; All the public pages are super <span className="highlight">SEO</span> friendly.</li>
                            <li>&nbsp; Advance <span className="highlight">search</span> functionality.</li>
                            <li>&nbsp; user registration with <span className="highlight">email verification</span>.</li>
                            <li>&nbsp; Auto job <span className="highlight">notification</span>.</li>
                            <li>&nbsp; Career and job related <span className="highlight">bloging</span>.</li>

                            
                        </ol>
                    </div>
                
                    <h5 style={{paddingTop:20+"px"}}>
                        <a className="btn btn-outline-info" href="https://magic-job.com/" target="_blank">
                            View Magic Job
                        </a>
                    </h5>
                </div>
                
            </div>

        <Contact />
        <Footer />
        </>
    );

}

export default Workdetail;