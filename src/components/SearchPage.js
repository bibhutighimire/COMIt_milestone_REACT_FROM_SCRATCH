import "../css/searchPage.css";
import "../css/styles.css";
import "../css/Home.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import recipeData from "../data";
import { v4 as uuid } from "uuid";

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
<ul>
       {this.state.recipeList.map((recipe) =>
          (
            <li>
            <div className="recipeCard" key={uuid()}>
              <h2>{recipe.title ? recipe.title : <>Not Available</>}</h2>
       </div>
       </li>
          ))}
         
          </ul>
        <Footer />
      </div>
      
          );
          }
        }
export default (SearchPage);
