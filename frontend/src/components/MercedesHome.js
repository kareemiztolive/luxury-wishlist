import React, {useRef, useEffect } from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {connect} from 'react-redux'
import CarCard from './CarCard'







 function Mercedeshome (props){

const mount = useRef(null)

useEffect(() => {

let scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
let camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
camera.rotation.y = 45/180*Math.PI;
camera.position.x = 800;
camera.position.y = 300;
camera.position.z = 1000;




// let controls = new OrbitControls(camera);
// controls.addEventListener('change', renderer);

// 0x404040

let hlight = new THREE.AmbientLight (0xffffff,1);
scene.add(hlight);
let directionalLight = new THREE.DirectionalLight(0xffffff,1);
        directionalLight.position.set(0,1,0);
        // directionalLight.castShadow = true;
        scene.add(directionalLight);
        let light = new THREE.PointLight(0xc4c4c4,1);
        light.position.set(0,300,500);
        scene.add(light);
        let light2 = new THREE.PointLight(0xc4c4c4,1);
        light2.position.set(500,100,0);
        scene.add(light2);
        let light3 = new THREE.PointLight(0xc4c4c4,1);
        light3.position.set(0,100,-500);
        scene.add(light3);
        let light4 = new THREE.PointLight(0xc4c4c4,1);
        light4.position.set(-500,300,500);
        scene.add(light4);


        
// renderer.outputEncoding = THREE.sRGBEncoding


let renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
mount.current.appendChild(renderer.domElement)

// document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera,renderer.domElement);
controls.addEventListener('change', renderer);
controls.update();


let loader = new GLTFLoader();


loader.load('./mercedes-benz_sls_amg/scene.gltf', function(gltf){
  let car = gltf.scene.children[0];
  car.scale.set(1.0,1.0,1.0);
  scene.add(gltf.scene);
  animate();
});

function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}


// './scene.gltf'


}, [])



const carsdata = localStorage.getItem("cars")
console.log(carsdata)
const cars = JSON.parse(carsdata)
console.log(cars)
const MercedesBenzArray = cars.filter(car => car.make.includes('Mercedes'))
console.log(MercedesBenzArray)
  
 return (


  
   <div>

     <h1 className="header2">MERCEDES BENZ</h1>

     <img className="brandimage" src="https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/g/class-page/non-amg/2020-G-SUV-CH-2-1-DR.jpg" alt=""/>
  
     <h2 className="header3">Mercedes Benz</h2>

     <p className="brandinfo">Mercedes-Benz AG is responsible for the global business of Mercedes-Benz Cars and Mercedes-Benz Vans with over 173,000 employee sworldwide. The company focuses on the development, production and sales of passenger cars, vans and services. Furthermore, the company aspires to be leading in the fields of connectivity, automated driving and alternative drives with its forward-looking innovations. The product portfolio comprises the Mercedes-Benz brand with the sub-brands Mercedes-AMG, Mercedes-Maybach and Mercedes me - as well as the smart brand, and the EQ product and technology brand for electric mobility.Mercedes-Benz AG is one of the largest manufacturers of premium passenger cars. In 2019 it sold nearly 2.4 million cars and more than 438,000 vans. In its two business divisions, Mercedes-Benz AG is continually expanding its worldwide production network with over 40 production sites on four continents, while aligning itself to meet the requirements of electric mobility.</p>
     
     <h2 className="header4">Mercedes 3D Model</h2>

     <div ref={mount}/>
    

    <div className="row"> {MercedesBenzArray.map(car =>  (
                    <CarCard car={car} />
     
                ))} </div>

   </div>
 
 );

}


export default connect()(Mercedeshome)
