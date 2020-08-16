
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class RecipePage extends React.Component {
  render() {
    return (
      <div className="recGalleryContainer">
      <Header titleHeader="Contact Us"/>
        <p className="pHome">Thanks for visiting my page. Please write something below or just say Hi!</p> 
       
        <Footer />
      </div>
          );
          }
        }
export default (RecipePage);
