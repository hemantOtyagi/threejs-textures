import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'


//hard way to load a texture on a geometry
//const img = new Image()
//const texture = new THREE.Texture(img);
//
//img.onload = () => {
//  texture.needsUpdate = true;
//}
//
//img.src = '../public/makka-madina-quran-box-with-reehal-401.jpg'

//easier wau to load a texture on a geometry using the textureLoader cladd instance
const textureLoader = new THREE.TextureLoader(); //creating a instance of the textureLoader class
const texture = textureLoader.load('../public/000.jpg')  //load the texture using the function load by providing the url or path of the image

//defining sizes
const sizes = {
  width: 600,
  height: 800
}


//getting dom element as canvas on which all these element gets mounted
const canvas = document.getElementById('webgl');

//creating a scene
const scene = new THREE.Scene();


//creating a object/Mesh 
const geometry = new THREE.BoxGeometry(1, 1, 1 , 5, 5, 5);
const material = new THREE.MeshBasicMaterial({ map: texture , wireframe: true});
const cube = new THREE.Mesh(geometry , material);
scene.add(cube);



//creating a camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height , 0.1, 1000);
camera.position.z = 3;
scene.add(camera);


//creating a WebGLRenderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas})
renderer.setSize( sizes.width , sizes.height );
renderer.setAnimationLoop( animate );
renderer.render(scene, camera);


//modifying the size as the screen size changes
window.addEventListener('resize', () => {

//updated width and height
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

//updated aspect ratio of the camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

//updated the size of the renderer
  renderer.setSize(sizes.width , sizes.height);
 
})

//adding OrbitControls 
const controls = new OrbitControls(camera, canvas);
controls.enableDamping= true;




renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

function animate() {

  //renderer.setAnimationLoop(animate)
	//cube.rotation.x += 0.005;
	//cube.rotation.y += 0.005;

	renderer.render( scene , camera);

}

//animate()
