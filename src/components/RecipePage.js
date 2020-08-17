import "../css/MyGoodRecipe.css";
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import recipeData from "../data";
import { v4 as uuid } from "uuid";

class RecipePage extends React.Component {

    render() {
        return (
            <div className="recGalleryContainer">
                <Header titleHeader="View all our Recipe Here" />
                <p className="pHome">Welcome to Recipe Page. Bwloe are the recipe you can view and also click on hearn icon beside it to move it to your Faves page to refer back later.</p>
                <div className="favContainer">
                    <ul>
                        {recipeData.map((recipes) => 
                        <li key={uuid()}>
                            <div className="binder">
                            <div className="imgAndTitleBind">
                            <h2>{recipes.title}</h2>
                    <figure>
<img src={recipes.image} alt="food" />

                    </figure>
                    </div>
                    <div className="textsBind">
                    <figcaption>
                    <ul>
                    <li className="label">{recipes.summary
                        ? recipes.summary.replace(/(<([^>]+)>)/gi, "")
                        : ""} </li>

<li>
                      <span className="topicHeader">Ingredients: </span>
                      <span className="topicP">
                        {recipes.analyzedInstructions ? (
                          recipes.analyzedInstructions.map(
                            (analyzedInstruction) =>
                              analyzedInstruction.steps.map((stepsInd) =>
                                stepsInd.ingredients.map((ingredient) => (
                                  <div key={uuid()}>
                                    {ingredient.name ? (
                                      ingredient.name
                                    ) : (
                                      <>Not available</>
                                    )}
                                    ,{" "}
                                  </div>
                                ))
                              )
                          )
                        ) : (
                          <>Not Avaialble</>
                        )}
                      </span>
                    </li>

                    <li>
                      <span className="topicHeader">Total Time: </span>
                      <span className="topicP">
                        {recipes.readyInMinutes ? (
                          <>{recipes.readyInMinutes} minutes</>
                        ) : (
                          <>Not Available</>
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="topicHeader">Influenced By: </span>
                      <span className="topicP">
                        <a
                          href={recipes.sourceUrl ? recipes.sourceUrl : ""}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Click Here to check out their URL
                        </a>
                      </span>
                    </li>

                    </ul>
                    </figcaption>
                    </div>
                    </div>
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
