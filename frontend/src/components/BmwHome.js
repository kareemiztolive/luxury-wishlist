import React,{useRef,useEffect}  from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {connect} from 'react-redux'
import CarCard from './CarCard'





 function Bmwhome (props){


  const mount = useRef(null)

  useEffect(() => {
  
  let scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  let camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
  camera.rotation.y = 45/180*Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;
  
  // let controls = new OrbitControls(camera);
  // controls.addEventListener('change', renderer);
  
  
  let hlight = new THREE.AmbientLight (0xffffff,1);
  scene.add(hlight);
  let directionalLight = new THREE.DirectionalLight(0xffffff,0.5);
          directionalLight.position.set(0,1,0);
          directionalLight.castShadow = true;
          scene.add(directionalLight);
          let light = new THREE.PointLight(0xc4c4c4,2);
          light.position.set(0,300,500);
          scene.add(light);
          let light2 = new THREE.PointLight(0xc4c4c4,2);
          light2.position.set(500,100,0);
          scene.add(light2);
          let light3 = new THREE.PointLight(0xc4c4c4,2);
          light3.position.set(0,100,-500);
          scene.add(light3);
          let light4 = new THREE.PointLight(0xc4c4c4,2);
          light4.position.set(-500,300,500);
          scene.add(light4);
  
  
  let renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  mount.current.appendChild(renderer.domElement)
  
  // document.body.appendChild(renderer.domElement);
  
  let controls = new OrbitControls(camera,renderer.domElement);
  controls.addEventListener('change', renderer);
  controls.update();
  
  
  let loader = new GLTFLoader();
  
  
  loader.load('./bmw_i8/scene.gltf', function(gltf){
    let car = gltf.scene.children[0];
    car.scale.set(2.0,2.0,2.0);
    scene.add(gltf.scene);
    animate();
  });
  
  function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }
  
  
  // './scene.gltf'
  
  
  },[])
   
const carsdata = localStorage.getItem("cars")
console.log(carsdata)
const cars = JSON.parse(carsdata)
console.log(cars)
const BMWArray = cars.filter(car => car.make.includes('BMW'))
console.log(BMWArray)



 return (
   <div>


     <h1 className="header2">BMW</h1>

     <img className="brandimage2"src="https://www.bmwusa.com/content/dam/bmwusa/M/m8-coupe/gallery/exterior/BMW-8-Series-M8-Coupe-Gallery-Exterior-10.jpg" alt=""/>

     <h2 className="header3">Bmw</h2>

     <p className="brandinfo">The special fascination of the BMW Group not only lies in its products and technology, but also in the company’s history, written by inventors, pioneers and brilliant designers. Today, the BMW Group, with its 31 production and assembly facilities in 15 countries as well as a global sales network in more than 140 countries, is the world’s leading manufacturer of premium automobiles and motorcycles, and provider of premium financial and mobility services.The BMW Group sets trends in production technology and sustainability as an innovation leader with an intelligent material mix, a technological shift towards digitalisation and resource-efficient production.Across its production network, the BMW Group implements innovative technologies from digitalisation and Industry 4.0, standardised processes and intelligent composite construction. The production system ensures consistent premium quality and offers a high level of customisation.  At the same time, flexibility and continuous optimisation of value chains ensure competitiveness.The BMW Group sets trends in production technology and sustainability as an innovation leader with an intelligent material mix, a technological shift towards digitalisation and resource-efficient production. At the same time, flexibility and continuous optimisation of value chains ensure competitiveness.   </p>
     
    <h2 className="header4">BMW 3D Model</h2>

     <div ref={mount}/>
  
     <div> {BMWArray.map(car =>  (
                    <CarCard car={car} />
     
                ))} </div>

   </div>
 );
}


export default connect()(Bmwhome)