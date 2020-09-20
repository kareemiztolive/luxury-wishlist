import React from 'react';
import './App.css';
import HomePage from "./components/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import mercedeshome from "./components//MercedesHome"
import bmwhome from "./components/BmwHome"
import lamborghinihome from "./components/LamborghiniHome"
import ferrarihome from "./components/FerrariHome"
import rollsroycehome from "./components/RollsRoyceHome"
import carshowpagecontainer from "./components/CarShowPageContainer"
import carshowpage from "./components/CarShowPage"
import NavBar from "./components/NavBar"
import signup from "./components/SignUp"
import login from "./components/Login"
import userprofile from "./components/UserProfile"




function App() {
  return (
   


<BrowserRouter>

{/* <HomePage/> */}
<NavBar/>
<Route path="/home" component={HomePage}/>
<Route path="/mercedes" component={mercedeshome}/>
<Route path="/bmw" component={bmwhome}/>
<Route path="/lamborghini" component={lamborghinihome}/>
<Route path="/ferrari" component={ferrarihome}/>
<Route path="/rollsroyce" component={rollsroycehome}/>
<Route path="/cars" component={carshowpagecontainer}/>
<Route path="/cars/:id" component={carshowpage}/>
<Route path="/signup" component={signup}/>
<Route path="/login" component={login}/>
<Route path="/profile" component={userprofile}/>



</BrowserRouter>
    
  );
}

export default App;
