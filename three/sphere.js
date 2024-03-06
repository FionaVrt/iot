// Importer Three.js
import * as THREE from 'three';

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x000b4d8); 

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 32, 32);
let material = new THREE.MeshBasicMaterial({ color: 0xbde0fe });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Fonction pour changer la couleur de la sphère
function changeSphereColor(color) {
    material = new THREE.MeshBasicMaterial({ color });
    sphere.material = material;
    changeSphereColor(0xff0000);
}

function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
