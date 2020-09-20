import React from 'react';

function NavBar (props){
 return (
   <div>
     
     <div>
      <ul className="navbarcontainer">
        <li className="navbaritemhome"><a href="/home">HOMEPAGE</a></li>
        <li className="navbaritem"><a href="/mercedes">MERCEDES</a></li>
        <li className="navbaritem"><a href="/bmw">BMW</a></li>
        <li className="navbaritem"><a href="/lamborghini">LAMBORGHINI</a></li>
        <li className="navbaritem"><a href="/ferrari">FERRARI</a></li>
        <li className="navbaritem"><a href="/rollsroyce">ROLLS ROYCE</a></li>
        <li className="navbarsignuplogin"><a href="/signup">SIGN UP</a></li>
        <li className="navbarsignuplogin"><a href="login">LOGIN</a></li>
        {/* <a href="/home">Home</a> */}
        
        </ul>
       </div>

   </div>
 );
}

export default NavBar
