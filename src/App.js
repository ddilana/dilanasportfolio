import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { Hamburger } from './components/NavBar/Hamburger';

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaConnectdevelop } from "react-icons/fa";

import { HamburgerLogo, DilanaLogo } from './components/NavBar/HamburgerStyled'

const App = () => {
const [showHamburger, setShowHamburger] = useState(false);

const hamburgerVisible = () => setShowHamburger(!showHamburger);

useEffect(() => {
  alert(
    "JavaScript is needed to be able to run this page, always run a browser that supports JavaScript, such as Chrome, Firefox etc."
  );
}, []);

  return (
    <Router>
      <NavBar />
      <DilanaLogo>
      <FaConnectdevelop  className="dilana__logo"  />
        </DilanaLogo>
      <HamburgerLogo>
      <GiHamburgerMenu className="hamburger__logo" style={{color:"#0F1EFF", position:"absolute", right:"0.5em", top:"20px", fontSize:"3rem", zIndex:"2"}} onClick={() => hamburgerVisible()} />
      </HamburgerLogo>
      {showHamburger && <Hamburger  setShowHamburger={setShowHamburger} />}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Contact" component={Contact} />
    </Router>
  );
};

export default App;
