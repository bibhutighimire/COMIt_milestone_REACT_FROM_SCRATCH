import "../css/MyGoodRecipe.css";
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import recipeData from "../data";
import { v4 as uuid } from "uuid";
import { faHeart, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RecipePage extends React.Component {

render() {
    return (
      <div className="recGalleryContainer">
      <Header titleHeader="View all our Recipe Here"/>
        <p className="pHome">Welcome to Recipe Page. Bwloe are the recipe you can view and also click on hearn icon beside it to move it to your Faves page to refer back later.</p> 
        <div className="favContainer">

            {/* <div key={uuid()}> */}
              <h2>{recipeData.title}</h2>
             
              <figure>
                <img
                  src={recipeData.image ? recipeData.image : ""}
                  alt="Food Recipe To See"
                />
                <figcaption>
                  <ul>
                    <li className="label">
                      {recipeData.summary
                        ? recipeData.summary.replace(/(<([^>]+)>)/gi, "")
                        : ""}
                    </li>
                    {/* <li>
                      <span className="topicHeader">Ingredients: </span>
                      <span className="topicP">
                        {indrecipe.analyzedInstructions ? (
                          indrecipe.analyzedInstructions.map(
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
                    </li> */}
                    <li>
                      <span className="topicHeader">Total Time: </span>
                      <span className="topicP">
                        {recipeData.readyInMinutes ? (
                          <>{recipeData.readyInMinutes} minutes</>
                        ) : (
                          <>Not Available</>
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="topicHeader">Influenced By: </span>
                      <span className="topicP">
                        <a
                          href={recipeData.sourceUrl ? recipeData.sourceUrl : ""}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Click Here to check out their URL
                        </a>
                      </span>
                    </li>
                  </ul>
                </figcaption>
              </figure>
            {/* </div> */}
          ))
        ) : (
          <>
            (<h2>" No Favorited recipes yet"</h2>)
          </>
        )}
</div>
        <Footer />
      </div>
          );
          }
        }
export default (RecipePage);
