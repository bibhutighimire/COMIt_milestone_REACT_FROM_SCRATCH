
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import recipeData from "../data";

class RecipePage extends React.Component {

//     componentDidMount = ()  => {
//        let listOfRecipe=[];
//     //    console.log(recipeData);
//     //    console.log("recipeData");
//         recipeData.map((recipes)=> 
//         recipes.map ? listOfRecipe.push(recipes):null
     
//         );
//         console.log(listOfRecipe);
//         console.log("listOfRecipe");
//         return listOfRecipe;
        

//   };

  render() {
    return (
      <div className="recGalleryContainer">
      <Header titleHeader="View all our Recipe Here"/>
        <p className="pHome">Welcome to Recipe Page. Bwloe are the recipe you can view and also click on hearn icon beside it to move it to your Faves page to refer back later.</p> 
       <div className="resultFromData">
       {recipeData.map((recipes)=> 
        recipes.title ? (recipes.title):null
     
        )}

       </div>
        <Footer />
      </div>
          );
          }
        }
export default (RecipePage);
