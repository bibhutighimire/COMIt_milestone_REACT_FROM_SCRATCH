
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class RecipePage extends React.Component {
  render() {
    return (
      <div className="recGalleryContainer">
      <Header titleHeader="Recipe Details"/>
        <p className="pHome">Below is the detailed version of recipe that you selected. Happy Cooking</p> 
       
        <Footer />
      </div>
          );
          }
        }
export default (RecipePage);
