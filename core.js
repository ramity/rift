
import * as THREE from './node_modules/three/build/three.module.min.js'

var canvas = document.getElementById('display')
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000)
var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setClearColor(0x2c3e50);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);

camera.position.z = 2;

var floor = new THREE.BoxGeometry(9, 9, 1);
var floorMaterial = new THREE.MeshLambertMaterial({ color: 0xe67e22 });
var floorMesh = new THREE.Mesh(floor, floorMaterial);
floorMesh.receiveShadow = true;
floorMesh.position.z = -1;
scene.add(floorMesh);

var light = new THREE.PointLight(0xffee88, 1.5, 10);
light.position.set(1, 1, 1);
light.castShadow = true;
scene.add(light);

// var helper = new THREE.PointLightHelper(light);
// scene.add(helper);

var light = new THREE.AmbientLight(0xbbbbbb);
scene.add(light);

function animate()
{
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // cube.rotation.z += 0.01;

    renderer.render(scene, camera);
}

animate();
