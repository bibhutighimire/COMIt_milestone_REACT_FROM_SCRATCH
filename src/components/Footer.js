
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faSearch,
  faHamburger,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <div className="footerIcons">
    <Link to="/Home">      
      <FontAwesomeIcon icon={faHome} />
      <p className= "footerText">Home</p>
    </Link> </div>
    <div className="footerIcons"> 

    <Link to="/RecipePage">
      <FontAwesomeIcon icon={faHamburger} />
      <p className="footerText">Recipe</p>
    </Link></div>

    <div className="footerIcons"> 
    <Link to="/SearchPage">
      <FontAwesomeIcon icon={faSearch} />
      <p className="footerText">Search</p>
    </Link></div>

    <div className="footerIcons"> 
    <Link to="/RecipeFav">      
      <FontAwesomeIcon icon={faHeart} />
      <p className="footerText">Faves</p>
    </Link> </div>
    
    <div className="footerIcons">
    <Link to="/ContactUs">
      <FontAwesomeIcon icon={faEnvelope} />
      <p className="footerText">Contact</p>
    </Link></div>
  </div>
);

export default Footer;
