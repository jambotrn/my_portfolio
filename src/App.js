
import './App.css?version=0.2';
//import './Fontawesome.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import { Link } from 'react-router-dom';
import React, {lazy, Suspense} from 'react';

import Home from './components/Home';
const Workpage= lazy(()=> import( './components/Workpage'))
const Magicjob= lazy(()=> import( './components/projectcomps/Magicjob'))
const Codingblog= lazy(()=> import( './components/projectcomps/Codingblog'))


function App() {
  return (
    
    <>
    <Router>
        <Routes>
        <Route path="/" element={ <Home />} />
      </Routes>
      
        <Suspense fallback={'loding...'}>
        <Routes>

          <Route path="/mywork" element={ <Workpage />} />
          <Route path="/magic-job" element={ <Magicjob />} />
          <Route path="/coding-blog" element={ <Codingblog />} />
      </Routes>

        </Suspense>
    </Router>
    </>
  )
}

export default App;
