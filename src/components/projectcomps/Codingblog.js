import React, {lazy, Suspense} from 'react';

import Header from "../Header";
const Footer= lazy(()=> import( "../Footer"))
const Contact= lazy(()=> import( "../Contact"))

function Workdetail(){

    return(
        <>
        <Header />
            <div className="container work-con">
                <h1 className="heading-span">Coding Blog</h1>
                <h3>A Computer Programme Bloging website</h3><br></br><br></br>
                <div className="row">
                    <div className="col-sm-12">
                        <img className="img-fluid work-img" src="project-img/skamirul-codingblog-project-img.png" alt="magic job "></img>
                    </div>
                </div>
                <div className="row">
                    <h3 className="heading-span" >Project Overview :</h3>
                    <div className="col-sm-11">
                        <p>
                        Coding Blog website lets you easily create SEO friendly coding articals that can appear on google search result easily.
                        It's  Django built in admin panel give you full controll over articals post, user authentication, user authorizations,
                        articals author, comments, articals category, articals tags.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <h3 className="heading-span" >Technologies Used :</h3>
                    <div className="col-sm-11">
                        <ol className="work-skill " >   
                            <li>&nbsp; Python-3</li>
                            <li>&nbsp; Django-4</li>
                            <li>&nbsp; Html-5</li>
                            <li>&nbsp; CSS-3</li>
                            <li>&nbsp; Bootstrap-5</li>
                            <li>&nbsp; Sqlite-3</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <h3 className="heading-span" >Features :</h3>
                    <div className="col-sm-11">
                         <ol  >   
                           <li>  user sign in with email conformation or social account authentication.</li>
                           <li> user update their profile with headshot.</li>
                           <li> only authenticated user can comment on blog. </li>
                           <li> post a blog with title, body, short discription, author, category, tags, thumbnail, published_at, status. </li>
                           <li> post slug autometically generated from blog title. </li>
                           <li> blog will be recommend by tags and category of the requested blog. </li>
                           <li> every web page would me contain meta title, description and keyword for Online SEO. </li>
                           <li> Web page created using HTML5, CSS3 and Bootstrap5, it is fully responcive. </li>
                           <li> Blogs are listed beautifully using bootstarp card element. </li>
                        </ol>
                    </div>
                </div>
                

            </div>
     <Suspense fallback={'loding...'}>
        <Contact />
        <Footer />
    </Suspense>
        </>
    );

}

export default Workdetail;