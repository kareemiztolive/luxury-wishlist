import React,{useRef,useEffect}  from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {connect} from 'react-redux'
import CarCard from './CarCard'





 function Ferrarihome (props){
 
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
  
  
  let hlight = new THREE.AmbientLight (0xffffff,1);
  scene.add(hlight);
  let directionalLight = new THREE.DirectionalLight(0xffffff,1);
          directionalLight.position.set(0,1,0);
          directionalLight.castShadow = true;
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
  
  
  let renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  mount.current.appendChild(renderer.domElement)
  
  // document.body.appendChild(renderer.domElement);
  
  let controls = new OrbitControls(camera,renderer.domElement);
  controls.addEventListener('change', renderer);
  controls.update();
  
  
  let loader = new GLTFLoader();
  
  
  loader.load('./ferrari_458_italia/scene.gltf', function(gltf){
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
const FerrariArray = cars.filter(car => car.make.includes('Ferrari'))
console.log(FerrariArray)


  return (
   <div>

     <h1 className="header2">Ferrari</h1>

     <img className="brandimage" src="https://images.wallpaperscraft.com/image/ferrari_laferrari_red_front_view_107058_1920x1080.jpg" alt=""/>

     <h2 className="header3">Ferrari</h2>

     <p className="brandinfo">Ferrari builds cars unique in terms of their performance, innovations, technology, driving pleasure and design.
      Cars acknowledged the world over as the pinnacle of Made in Italy achievement.Ferrari desigsn and build all their cars in Maranello, Italy, but they sell them in over 60 markets worldwide through a network of 180 authorised dealers. 
      Ferrari supports the Ferrari legend and brand by organising a plethora of initiatives for our clients and fans, both in Maranello and across the world. They also do in other ways, such as signing licencing agreements with select partners to develop the lines of products sold in the Ferrari Stores and to allow the creation of Ferrari museums and theme parks.   The Ferrari logo with its iconic Prancing Horse symbolizes Italian luxury, exclusivity, performance, design and quality the world over.
      Each Ferrari car is unique. But as a whole, they form a single family built thanks to a long expertise in engineering and driving performance. The design of each Ferrari vehicle draws inspiration from the Scuderia Ferrari in Formula 1, Gran Turismo or Sports prototypes. All the sports cars models have the same start line—a passion for competition that has inspired the inimitable technique and design Ferrari calls its own.
 
</p>

<h2 className="header4">Ferrari 3D Model</h2>

<div ref={mount}/>

<div> {FerrariArray.map(car =>  (
                    <CarCard car={car} />
     
                ))} </div>

   </div>
 );
}

export default connect()(Ferrarihome)