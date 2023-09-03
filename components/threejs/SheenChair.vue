<template>
  <div ref="three-sheen"></div>
</template>

<script>
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

export default {
	props: {
		isZoom: {
			type: Boolean,
			default: true
		},
		isAutoRotate: {
			type: Boolean,
			default: false
		},
		isAutoRotateSpeed: {
			type: Number,
			default: 2.0
		}
	},
  mounted() {
    this.$nextTick(() => {
      this.initThreeLoad()
    })
  },
  methods: {
    initThreeLoad() {
			var vm = this;
      const container = this.$refs['three-sheen'];
      let camera, scene, renderer, controls;

			init();
			animate();

			function init() {
				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 20 );
				camera.position.set(-0.75, 0.7, 1.25);

				scene = new THREE.Scene();

				// model
				new GLTFLoader()
					.setPath('/threejs/models/gltf/')
					.load('SheenChair.glb', function (gltf) {
						const object = gltf.scene.getObjectByName('SheenChair_fabric');
            object.material.sheen = 0;

						scene.add(gltf.scene);
            
						// const gui = new GUI();
						// gui.add(object.material, 'sheen', 0, 1);
						// gui.open();
					});

				renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor( 0x000000, 0 ); // the default
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( container.clientWidth, container.clientHeight );
				renderer.toneMapping = THREE.ACESFilmicToneMapping;
				renderer.toneMappingExposure = 1;

				container.appendChild( renderer.domElement );

				const environment = new RoomEnvironment( renderer );
				const pmremGenerator = new THREE.PMREMGenerator( renderer );

				// scene.background = new THREE.Color( '#030303' );
				scene.environment = pmremGenerator.fromScene( environment ).texture;

				controls = new OrbitControls( camera, renderer.domElement );
				controls.enableDamping = true;
        controls.enableZoom = vm.isZoom;
				controls.autoRotate = vm.isAutoRotate;
				controls.autoRotateSpeed = vm.isAutoRotateSpeed;
				controls.minDistance = 1;
				controls.maxDistance = 10;
				controls.target.set( 0, 0.35, 0 );
				controls.update();

				window.addEventListener( 'resize', onWindowResize );
			}

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( container.clientWidth, container.clientHeight );
			}

			function animate() {
				requestAnimationFrame( animate );
				controls.update(); // required if damping enabled
				render();
			}

			function render() {
				renderer.render( scene, camera );
			}
    }
  }
}
</script>

<style></style>