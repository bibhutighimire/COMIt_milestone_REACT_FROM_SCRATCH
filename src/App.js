import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import RecipePage from "./components/RecipePage.js";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import RecipeFav from "./components/RecipeFav";
function App() {
  return (
    <>
<Router>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/recipepage" component={RecipePage} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/recipefav" component={RecipeFav} />

    </Router>

    </>
  );
}

export default App;
