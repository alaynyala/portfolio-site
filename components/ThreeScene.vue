<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { gsap } from 'gsap';

const canvas = ref(null);

// Scene state
const state = ref({
  transmission: 1,
  thickness: 1.25,
  roughness: 0.25,
  ior: 1.07,
  envMapIntensity: 1
});

// Three.js variables
let renderer, camera, scene, material;
let glassMesh;
let animationFrameId;
let lastTime = 0;

// Setup functions
const initScene = () => {
  // Renderer setup with anti-aliasing
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvas.value,
    alpha: true,
    antialias: true // Enable anti-aliasing
  });

  renderer.setClearColor(0xffffff, 1);
  renderer.outputEncoding = THREE.LinearEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  // Camera setup
  camera = new THREE.PerspectiveCamera(35, 1, 0.01, 100);
  camera.position.set(0, 0, 6);

  scene = new THREE.Scene();

  // Setup background
  const bgTexture = new THREE.TextureLoader().load('/images/flower-layer-bg.png');
  bgTexture.colorSpace = THREE.SRGBColorSpace;  // Proper color handling
  const bgGeometry = new THREE.PlaneGeometry(9, 6); // Larger size
  const bgMaterial = new THREE.MeshBasicMaterial({
    map: bgTexture,
    side: THREE.DoubleSide,
    transparent: false,
    opacity: 1 
  });
  const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
  bgMesh.position.z = -0.25; // Push further back
  scene.add(bgMesh);

  // Load HDRI 
  new RGBELoader()
    .setDataType(THREE.FloatType)
    .load('/images/Studio-Small.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.background = texture;
    });

  // Create glass material
  material = new THREE.MeshPhysicalMaterial({
    transmission: state.value.transmission,
    thickness: state.value.thickness,
    roughness: state.value.roughness,
    ior: state.value.ior,
    envMapIntensity: 1.3, // Increased reflection
    color: new THREE.Color(0xffffff),
    transparent: true,
    metalness: 0,
    clearcoat: .5,
    clearcoatRoughness: 0,
    side: THREE.DoubleSide,
    attenuationColor: new THREE.Color(0xffffff),
    attenuationDistance: 0.01
  });

  // Load GLTF model
  const loader = new GLTFLoader();
  loader.load('/models/flutedmd.gltf', (gltf) => {
    const mesh = gltf.scene.children[0];
    material.transparent = true;
    material.opacity = 0;
    glassMesh = new THREE.Mesh(mesh.geometry.clone(), material);
    glassMesh.scale.set(4, 4, 4);
    scene.add(glassMesh);

    gsap.to(material, {
      delay: 2.5,
      duration: 2,
      opacity: 1,
      ease: 'expo.inOut'
    });
  });
};

// Mouse movement tracking
const onMouseMove = (event) => {
  // Convert mouse position to normalized device coordinates (-1 to +1)
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;

  // Update glass mesh position based on mouse coordinates, dampened by 20%
  if (glassMesh) {
    glassMesh.position.x = mouseX * 2 * 0.2; // Scale and dampen movement
    glassMesh.position.y = glassMesh.position.y; // Keep the current y position
  }
};

// Touch movement tracking
const onTouchMove = (event) => {
  const touch = event.touches[0]; // Get the first touch point
  const touchX = (touch.clientX / window.innerWidth) * 2 - 1;

  // Update glass mesh position based on touch coordinates, dampened by 20%
  if (glassMesh) {
    glassMesh.position.x = touchX * 2 * 0.2; // Scale and dampen movement
    glassMesh.position.y = glassMesh.position.y; // Keep the current y position
  }
};

const updateScene = (time) => {
  const deltaTime = (time - lastTime) / 1000;
  lastTime = time;
};

const animate = (time) => {
  animationFrameId = requestAnimationFrame(animate);
  
  updateScene(time);
  renderer.render(scene, camera);
};

const handleResize = () => {
  const width = canvas.value.clientWidth;
  const height = canvas.value.clientHeight;
  const dpr = Math.min(window.devicePixelRatio, 2);

  canvas.value.width = width * dpr;
  canvas.value.height = height * dpr;

  renderer.setPixelRatio(dpr);
  renderer.setSize(width, height);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // Adjust camera position for mobile devices
  if (window.innerWidth < 768) { // Check if the device is mobile
    camera.position.set(0, 0, 6.8); // Zoom out by 20% (originally 6)
  } else {
    camera.position.set(0, 0, 6); // Reset to original position for larger screens
  }
};

onMounted(() => {
  initScene();
  handleResize();
  window.addEventListener('resize', handleResize);
  window.addEventListener('mousemove', onMouseMove); // Add mouse move event listener
  window.addEventListener('touchmove', onTouchMove); // Add touch move event listener
  animate(0);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('mousemove', onMouseMove); // Remove mouse move event listener
  window.removeEventListener('touchmove', onTouchMove); // Remove touch move event listener
  cancelAnimationFrame(animationFrameId);
  
  // Cleanup
  if (glassMesh) {
    glassMesh.geometry.dispose();
    scene.remove(glassMesh);
  }
  if (material) {
    material.dispose();
  }
  if (renderer) {
    renderer.dispose();
  }
});
</script>

<template>
  <canvas ref="canvas" />
</template>

<style scoped>
canvas {
  display: block;
  width: 100%;
  height: 90vh;
  cursor: pointer;
}
</style>
