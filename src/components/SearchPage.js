import "../css/searchPage.css";
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import recipeData from "../data";
import { v4 as uuid } from "uuid";
import "../css/MyGoodRecipe.css";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      recipeList: [],
    };
  } 
  updateItem(key, value) {
    this.setState({ [key]: value });
  }

    submitHandler = (event) => {
     
      event.preventDefault();
      let newArray = [];
      recipeData.map((recipe) =>
      recipe.title
          .toLowerCase()
          .indexOf(this.state.searchInput.toLowerCase()) !== -1
          ? newArray.push(recipe)
          : null
      )
   

    this.setState({ recipeList: [newArray] });
    this.updateItem("searchInput", "");
  };
    

  render() {
    // console.log(recipeData);
    // console.log("recipeData");
  

return (
  
 
      <div className="recGalleryContainer">
      <Header titleHeader="Search Your Fav Recipe here!"/>
   
        <p className="pHome">This is a search page. Please type the title of food that you want to check out and we will try to provide you with details</p> 
        <form onSubmit={this.submitHandler}>
     
       <input className="searchInput" type="text"  value={this.state.searchInput} onChange={(event) =>this.updateItem("searchInput",event.target.value)}  placeholder="Type the title of food and we will display it's full recipe!" />
       <button type="submit" id="btnSubmit" >Search</button>
      
       </form>


       <div className="favContainer">
                    <ul>
                        {this.state.recipeList.map((recipes) =>
                         recipes.map((indRecipe) =>
                        <li key={uuid()}>
                            <div className="binder">
                            <div className="imgAndTitleBind">
                            <h2>{indRecipe.title}</h2>
                    <figure>
<img src={indRecipe.image} alt="food" />

                    </figure>
                    
                    </div>
                    <div className="textsBind">
                    <figcaption>
                    <ul>
                    <li className="label">{indRecipe.summary
                        ? indRecipe.summary.replace(/(<([^>]+)>)/gi, "")
                        : ""} </li>

{/* <li>
                      <span className="topicHeader">Ingredients: </span>
                      <span className="topicP">
                        {indRecipe.analyzedInstructions ? (
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
                    </li> */}

                    <li>
                      <span className="topicHeader">Total Time: </span>
                      <span className="topicP">
                        {indRecipe.readyInMinutes ? (
                          <>{indRecipe.readyInMinutes} minutes</>
                        ) : (
                          <>Not Available</>
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="topicHeader">Influenced By: </span>
                      <span className="topicP">
                        <a
                          href={indRecipe.sourceUrl ? indRecipe.sourceUrl : ""}
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
                        ))
                    }
                    </ul>
                </div>

        <Footer />
      </div>
      
          );
          }
        }
export default (SearchPage);
{/* <ul>
       {this.state.recipeList.map((recipe) =>
       recipe.map((indrecipe) => (
          
            <li>
            <div className="recipeCard" key={uuid()}>
              <h2>{indrecipe.title ? indrecipe.title : <>Not Available</>}</h2>
       </div>
       </li>
       )))}
         
          </ul> */}