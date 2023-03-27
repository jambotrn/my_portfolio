
import Header from '../components/Header';
import Footer from '../components/Footer';
import Work from '../components/Work';
import {Helmet} from 'react-helmet-async';

function Workpage(){
    return(
        <>
         <Helmet>
            <title> Sk Amirul | Full stack web development projects </title>
            <meta name="description" content='latest work of sk amirul , magic job , coding blog, sneha intercontinental'/>
            <meta name="keywords" content="Full stack web developer, back end developer, front end developer, responsive web pages, SEO friendly, Advance search functionality, python , django, Mysql" />
            
            <link rel="canonical" href="/"/>
        </Helmet>

        <Header />
        <Work />
        <Footer/>
    </>    
    )
}

export default Workpage