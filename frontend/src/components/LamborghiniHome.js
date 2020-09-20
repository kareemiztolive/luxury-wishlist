import React,{useRef,useEffect} from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {connect} from 'react-redux'
import CarCard from './CarCard'


 function  Lamborghinihome (props){
 
 
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
  let directionalLight = new THREE.DirectionalLight(0xffffff,1);
          directionalLight.position.set(0,1,0);
          directionalLight.castShadow = true;
          scene.add(directionalLight);
          let light = new THREE.PointLight(0xc4c4c4,3);
          light.position.set(0,300,500);
          scene.add(light);
          let light2 = new THREE.PointLight(0xc4c4c4,3);
          light2.position.set(500,100,0);
          scene.add(light2);
          let light3 = new THREE.PointLight(0xc4c4c4,3);
          light3.position.set(0,100,-500);
          scene.add(light3);
          let light4 = new THREE.PointLight(0xc4c4c4,3);
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
  
  
  loader.load('./lamborghini_aventador_j/scene.gltf', function(gltf){
    let car = gltf.scene.children[0];
    car.scale.set(0.9,0.9,0.9);
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
const LamborghiniArray = cars.filter(car => car.make.includes('Lamborghini'))
console.log(LamborghiniArray)

  return (
   <div>

     <h1 className="header2">Lamborghini</h1>

     <img className="brandimage2" src="https://wallpaperplay.com/walls/full/4/4/9/294938.jpg" alt=""/>

     <h2 className="header3">Lamborghini</h2>

     <p className="brandinfo">Automobili Lamborghini is an Italian luxury car company considered one of the most prestigious car companies in the world. To deliver the most desirable luxury super sports cars they aim for uncompromising Quality up to the finest detail. The company has 165 dealerships around the world and has focused on increasing their global sales, with 8,205 cars delivered in 2019. Quality is a Core competence of Automobili Lamborghini. The company designs and produces some of the worlds the most reliable, appealing and innovative luxury super sports cars worldwide, with the purpose of exceeding expectation of the customer. Continuous improvement and orientation to Quality standards are the main principles of their daily work; the basis to achieve the targets are the knowledge, development and satisfaction of their employees,  a process-oriented QM to maximize the customer satisfaction and an effective integration with the Group.
  </p>

  <h2 className="header4"> Lamborghini 3D Model </h2>

  <div ref={mount}/>

  <div> {LamborghiniArray.map(car =>  (
                    <CarCard car={car} />
     
                ))} </div>
 
   </div>
 );
}




export default connect()(Lamborghinihome)