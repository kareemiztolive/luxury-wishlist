import React from 'react';
import {Link} from "react-router-dom";

 
function CarCard (props){

  return (
    <div className="column">
   <div className="card">
     <h1 className="title">
  <span className="titlespace">{props.car.year}</span>
  <span className="titlespace">{props.car.make}</span>
  <span>{props.car.model}</span>
  </h1>

   <img className="cardimage" src={props.car.imageurl1} alt=""/>

  <h2 className="title2"> 
  
  <span className="titlespace2">{props.car.cost}</span>
  <div className="titlecaption"> cost</div>

  <span className="titlespace2">{props.car.zerotosixty}</span>
  <div className="titlecaptionspace">0-60 mph</div>

 <span className="titlespace2">{props.car.horsepower}</span>
 <div className="titlecaptionextra"> Horsepower </div>
 
  </h2>

  <div>
    <Link to={`/cars/${props.car.id}`}>
    <button className="button3">More Information</button>
    </Link>
  </div>


   </div>
    </div>
 );
}

export default CarCard
