import React from 'react';

function CarShowPage (props){
 
  return (
   <div>
     <h1 className="pagetitle">
  <span className="pagetitlespace">{props.car.year}</span>
  <span className="pagetitlespace">{props.car.make}</span>
  <span>{props.car.model}</span>
     </h1>
     
    <div className="pagetitle2">
      <span className="pagetitle2space">Cost</span>
      <span>{props.car.cost}</span>
    </div>
   
   <div>
  <span className="modelinfospace">Description</span>
  <p className="modelinfo">{props.car.description}</p>
  </div>
  
  <div>
  <div>
    <img className="pageimage" src={props.car.imageurl1} alt=""/>
  </div>        
  <div> 
    <img className="pageimage2" src={props.car.imageurl2} alt=""/>
  </div>
  <div> 
    <img className="pageimage" src={props.car.imageurl3} alt=""/>
  </div>
  <div>
    <img className="pageimage3" src={props.car.imageurl4} alt=""/>
  </div>
  </div>

  <div>
    <h2 className="pagetitle3">Technical Specifications</h2>
    
    <ul className="specinfocontainer">
      <li className="specinfoitem">
      <span>Horsepower</span>
      <span className="specinfoitemspace">{props.car.horsepower}</span>
      </li>

      <li className="specinfoitem">
      <span>mpg city</span>
      <span className="specinfoitemspace">{props.car.fueleconomycity}</span>
      </li>

      <li className="specinfoitem">
      <span>mpg highway</span>
      <span className="specinfoitemspace">{props.car.fueleconomyhighway}</span>
      </li>

      <li className="specinfoitem">
      <span>torque</span>
      <span className="specinfoitemspace">{props.car.torque}</span>
      </li>
      
      <li className="specinfoitem">
      <span>Acceleration 0-60</span>
      <span className="specinfoitemspace">{props.car.zerotosixty}s</span>
      </li>
    </ul>

  </div>

  <div>
    <button className="button4">Add To Wishlist</button>
  </div>


   </div>
 );
}

export default CarShowPage
