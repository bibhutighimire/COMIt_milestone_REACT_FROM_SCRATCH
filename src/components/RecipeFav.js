
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class RecipePage extends React.Component {
  render() {
    return (
      <div className="recGalleryContainer">
      <Header titleHeader="View all your Fav Recipe Here"/>
        <p className="pHome">Welcome to Fav Recipe Page. There are the recipes you favorited and will be helpful to quick look at! Enjoy</p> 
       
        <Footer />
      </div>
          );
          }
        }
export default (RecipePage);
