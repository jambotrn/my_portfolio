
import './App.css?version=0.2';
//import './Fontawesome.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import { Link } from 'react-router-dom';


import Workpage from './components/Workpage';
import Home from './components/Home';
import Magicjob from './components/projectcomps/Magicjob';
import Codingblog from './components/projectcomps/Codingblog';


function App() {
  return (
    
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/mywork" element={ <Workpage />} />
        <Route path="/magic-job" element={ <Magicjob />} />
        <Route path="/coding-blog" element={ <Codingblog />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
