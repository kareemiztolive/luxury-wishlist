import React,{useRef,useEffect}  from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {connect} from 'react-redux'
import CarCard from './CarCard'






 function Rollsroyce (props){

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
  
  
  loader.load('./scene.glb', function(gltf){
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
  const RollsRoyceArray = cars.filter(car => car.make.includes('Rolls Royce'))
  console.log(RollsRoyceArray)
  
 return (
   <div>

     <h1 className="header2">Rolls Royce</h1>

     <img className="brandimage"src="https://cdn.carbuzz.com/gallery-images/2018-2020-rolls-royce-phantom-front-view-carbuzz-544944-1600.jpg" alt=""/>

     <h2 className="header3">Rolls Royce</h2>

     <p className="brandinfo">Rolls Royce sits at the very top of the luxury vehicle class. They have a passionate dedication to crafting beautiful cars,their attention to detail is really what seperates them from other luxury cars. They hand craft the most important parts and will strive to fullfill the needs of all their customers. They have customers in over 150 countries, and operate in more than 50 countries worldwide. Their strive for perfection guides them.
Rolls-Royce is an everlasting expression of the exceptional, where everything they do reflects their persistence and commitment towards the remarkable.  </p>

<h2 className="header4">Rolls Royce 3D Model</h2>

 <div ref={mount}/>
 <div> {RollsRoyceArray.map(car =>  (
                    <CarCard car={car} />
     
                ))} </div>

   </div>
 );

}

export default connect()(Rollsroyce)
