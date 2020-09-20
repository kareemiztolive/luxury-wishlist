import React,{useEffect} from 'react';
import bmw2 from "../images/bmw2.jpg"
// import ferrari2 from "../images/ferrari2.jpg"
import lamborghini from "../images/lamborghini.jpg"
import mercedes from "../images/mercedes.jpg"
import rollsroyce from "../images/rollsroyce.jpg"
import lamborghinivideo2 from "../videos/LamborghiniVideo2.mp4"
import ferrari3 from "../images/ferrari3.jpg"
// import ferrari from "../images/ferrari.jpg"
import {Link} from "react-router-dom";
import {connect,useDispatch} from 'react-redux'
import {fetchCars} from '../actions/carsActions'


import "../css/style.css"
import "../css/style.scss"


function Homepage (props) {

// const [cars, setCars] = useState([])

// const fetchCars = () => {
//   fetch("http://localhost:3001/cars")
//   .then(res => res.json())
//   .then(res => setCars(res))

// }

let dispatch = useDispatch()

useEffect(() => {
 dispatch(fetchCars())
 
},[dispatch])
  
// fetch("http://localhost:3001/cars")
//   .then(res => res.json())
//   .then(res => console.log(res))
 


 return (
   <div>

     {/* <div>
<ul className="navbarcontainer">
       <li className="navbaritem">MERCEDES BENZ</li>
         <li className="navbaritem">BMW</li>
         <li className="navbaritem" >LAMBORGHINI</li>
        <li className="navbaritem" >FERRARI</li>
           <li className="navbaritem" >ROLLS ROYCE</li>                    
                  </ul>
                 </div> */}

     
     {/* <h1>HomePage</h1> */}

     <div className="css-carousel">
 
    {/* carousel controls  */}

    <input type="radio" name="carousel" id="carousel-1" checked/>
    <input type="radio" name="carousel" id="carousel-2" checked/>
    <input type="radio" name="carousel" id="carousel-3" checked/>
    <input type="radio" name="carousel" id="carousel-4" checked/>
    <input type="radio" name="carousel" id="carousel-5" checked/>
 
    {/* carousel navigation */}

    <div className="carousel-nav">
        <label for="carousel-1"></label>
        <label for="carousel-2"></label>
        <label for="carousel-3"></label>
        <label for="carousel-4"></label>
        <label for="carousel-5"></label>
    </div>
 
    {/* carousel slides */}

    <div className="carousel-slides">
        <div className="carousel-inner">

            <div className="carousel-item">
            <span className="header1">Mercedes Benz</span>        


                <img src={mercedes} style={{width: "100%"}} alt="mercedes description"/>
             
                 <div>
                 <button className="button1">LEARN MORE</button>
                 
                 <Link to="/mercedes">
                 <button className="button2">LEARN MORE</button>
                 </Link>


                 </div>
               
            </div>

            <div className="carousel-item">
            <span className="header1">BMW</span>
            
               <img src={bmw2} style={{width: "100%"}} alt="bmw description"/>
                
                <div>
                <button className="button1">LEARN MORE</button>
                <Link to="/bmw">
                 <button className="button2">LEARN MORE</button>
                 </Link>
                 </div>
               
            </div>

            <div className="carousel-item">
            <span className="header1">Lamborghini</span>  
                 
               <img src={lamborghini} style={{width: "100%"}} alt="lamborghini description"/>
               
                <div>
                <button className="button1">LEARN MORE</button>
                <Link to="/lamborghini">
                 <button className="button2">LEARN MORE</button>
                 </Link>
                 </div>
                
            </div>

            <div className="carousel-item">
            <span className="header1">Ferrari</span>
           
              <img src={ferrari3} style={{width: "100%"}} alt="ferrari description"/>
             
             <div>
               <button className="button1">LEARN MORE</button>
               <Link to="/ferrari">
                 <button className="button2">LEARN MORE</button>
                 </Link>
                 </div>
                
            </div>

            <div className="carousel-item">
            <span className="header1">Rolls Royce</span>
            
              <img src={rollsroyce} style={{width: "100%"}} alt="rolls royce description"/>
               
               <div>
               <button className="button1">LEARN MORE</button> 
               <Link to="/rollsroyce">
                 <button className="button2">LEARN MORE</button>
                 </Link>
                </div>
            </div>

        </div>
    </div>
 
</div>


<video autoPlay muted loop  style={{width: "100%"}}  className="myvideo">
  <source src={lamborghinivideo2} ></source>
</video>

 
   </div>
 );
}

const mapStateToProps = (state) => ({
  loading: state.cars.loading,
  cars: state.cars.cars,
  hasErrors: state.cars.hasErrors,
})

export default connect(mapStateToProps)(Homepage)                                                         