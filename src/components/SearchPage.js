
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class SearchPage extends React.Component {
  render() {
    return (
      <div className="recGalleryContainer">
      <Header titleHeader="Contact Us"/>
        <p className="pHome">This is a search page. Please type the title of food that you want to check out and we will try to provide you with details</p> 
       
        <Footer />
      </div>
          );
          }
        }
export default (SearchPage);
