
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class Home extends React.Component {
  render() {
    return (
      <div className="recGalleryContainer">
      <Header titleHeader="Welcome to Recipe Home Page"/>
        <p className="pHome">Welcome! This site is dedicated to our love for all things delicious. We love breakfast, lunch, and dinner, so here are a few good eats to get you started. Enjoy!</p> 
       

        <figure className="lunchSandwich"> {/*Start of Lunch_Sandwich @link: https://spoonacular.com/recipes/ham-and-swiss-panini-with-mushrooms-and-kale-646191*/}

        <div className="overlay">

        <ul className="recipeText">
            <li className="foodtitle">The Ultimate Good Girl Cheeseburger</li>
            <li className="foodText">Meat. Cheese. Bacon. What's not to love? </li>
          </ul>
          </div>
        </figure> {/*End of Lunch Sandwich*/}

        <figure className="dinnerStew"> {/*Start of Dinner_Stew @link: https://spoonacular.com/recipes/instant-pot-pressure-cooker-pot-roast-982375*/}
          <div className="overlay">

          <ul className="recipeText">
            <li className="foodtitle">Roasted Lamb & Butter Glazed Vegetables </li>
            <li className="foodText"> Slow-roasted lamb in an absolutely mouth-watering, creamy glaze! This is like the best dinner your mom ever made you, only better.</li>
          </ul>
          </div>
        </figure> {/*End of Dinner_Stew*/}
        <Footer />
      </div>
          );
          }
        }
export default (Home);
