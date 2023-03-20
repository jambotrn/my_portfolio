
import {lazy, Suspense} from 'react';
import Header from '../components/Header';
const Footer = lazy(()=> import( '../components/Footer'))
const About = lazy(()=> import( '../components/About'))
const Skill = lazy(()=> import( '../components/Skill'))
const Work = lazy(()=> import('../components/Work'))
const Contact = lazy(()=> import( '../components/Contact'));



 function Home(){

    return(

    <>
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