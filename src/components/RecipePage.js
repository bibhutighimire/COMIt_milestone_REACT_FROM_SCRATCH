
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class RecipePage extends React.Component {
  render() {
    return (
      <div className="recGalleryContainer">
      <Header titleHeader="View all our Recipe Here"/>
        <p className="pHome">Welcome to Recipe Page. Bwloe are the recipe you can view and also click on hearn icon beside it to move it to your Faves page to refer back later.</p> 
       
        <Footer />
      </div>
          );
          }
        }
export default (RecipePage);
