import "../css/MyGoodRecipe.css";
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import recipeData from "../data";

class RecipePage extends React.Component {

    render() {
        return (
            <div className="recGalleryContainer">
                <Header titleHeader="View all our Recipe Here" />
                <p className="pHome">Welcome to Recipe Page. Bwloe are the recipe you can view and also click on hearn icon beside it to move it to your Faves page to refer back later.</p>
                <div className="favContainer">
                    <ul>
                        {recipeData.map((recipes) => 
                        <li>
                            <h2>{recipes.title}</h2>
                    <figure>
<img src={recipes.image} alt="food" />

                    </figure>
                    </li>
                    )}
                    </ul>
                </div>
                <Footer />
            </div>
        );
    }
}
export default (RecipePage);
// {recipeData.map((recipes)=>
//     recipes.title ? (recipes.title):null
//  )}
