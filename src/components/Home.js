
import {lazy, Suspense} from 'react';
import Header from '../components/Header';
import {Helmet} from 'react-helmet-async';
const Footer = lazy(()=> import( '../components/Footer'))
const About = lazy(()=> import( '../components/About'))
const Skill = lazy(()=> import( '../components/Skill'))
const Work = lazy(()=> import('../components/Work'))
const Contact = lazy(()=> import( '../components/Contact'));



 function Home(){

    return(

    <>
        <Helmet>
            <title>Sk Amirul | A Full stack web developer </title>
            <meta name="description" content='Sk Amirul is a passionate full Stack Web Developer.
            Convert Business Needs Into Technical Specifications using  Python, Php, Django, Laravel, Mysql, HTML, CSS, JavaScript, Bootstrap, Git '

            />
            <meta name="keywords" content="Full stack web developer, back end developer, front end developer, responsive web pages, SEO friendly, Advance search functionality, python , django, Mysql" />
            
            <link rel="canonical" href="/"/>
        </Helmet>
        < Header />
        <About />
        <Suspense fallback={<div>Loading...</div>}>
                
            < Skill />
            < Work />
            < Contact />
            < Footer />
        </Suspense>
     </>

    )

}

export default Home