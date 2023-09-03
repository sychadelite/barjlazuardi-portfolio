<template>
  <div ref="three-littlest-tokyo"></div>
</template>

<script>
import * as THREE from 'three'
import WebGL from 'three/addons/capabilities/WebGL.js';

import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

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
      let mixer;

      const clock = new THREE.Clock();
      const container = this.$refs['three-littlest-tokyo'];

      // const stats = new Stats();
      // container.appendChild(stats.dom);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setClearColor( 0x000000, 0 ); // the default
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      const pmremGenerator = new THREE.PMREMGenerator(renderer);

      const scene = new THREE.Scene();
      // scene.background = new THREE.Color('#030303');
      scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

      const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
      camera.position.set(5, 2, 11.5);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0.5, 0);
      controls.update();
      controls.enablePan = false;
      controls.enableDamping = true;
      controls.enableZoom = this.isZoom;
      controls.autoRotate = this.isAutoRotate;
      controls.autoRotateSpeed = this.isAutoRotateSpeed;

      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('/threejs/jsm/libs/draco/gltf/');

      const loader = new GLTFLoader();
      loader.setDRACOLoader(dracoLoader);
      loader.load('/threejs/models/gltf/LittlestTokyo.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(1, 1, 0);
        model.scale.set(0.01, 0.01, 0.01);
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();

        if ( WebGL.isWebGLAvailable() ) {
          // Initiate function or other initializations here
          animate();
        } else {
          const warning = WebGL.getWebGLErrorMessage();
          this.$refs['three-littlest-tokyo'].appendChild( warning );
        }
      }, undefined, function (e) {
        console.error(e);
      });

      window.onresize = function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      function animate() {
        requestAnimationFrame(animate);

        const delta = clock.getDelta();
        mixer.update(delta);

        controls.update();
        // stats.update();
        renderer.render(scene, camera);
      }
    },
  },
}
</script>

<style></style>