import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshMatcapMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

let xRot = 0.01;
let yRot = 0.01;

document.addEventListener("mousemove", (e) => {
  const windowProperties = {
    h: window.innerHeight,
    w: window.innerWidth,
  };
  const mousecoords = { x: e.clientX, y: e.clientY };

  const blockParams = { width: 100, height: 100 };

  if (mousecoords.x < windowProperties.w / 2 - blockParams.width / 2) {
    yRot = -0.01;
  } else if (mousecoords.x > windowProperties.w / 2 + blockParams.width / 2) {
    yRot = 0.01;
  } else {
    yRot = 0;
  }

  if (mousecoords.y < windowProperties.h / 2 - blockParams.height / 2) {
    xRot = -0.01;
  } else if (mousecoords.y > windowProperties.h / 2 + blockParams.height / 2) {
    xRot = 0.01;
  } else {
    xRot = 0;
  }
});

function animate() {
  renderer.render(scene, camera);
  cube.rotation.x += xRot;
  cube.rotation.y += yRot;
}
renderer.setAnimationLoop(animate);
