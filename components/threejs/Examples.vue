<template>
  <div>
    <div ref="three-cube"></div>
    <div ref="three-drawlines"></div>
  </div>
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
  mounted() {
    this.$nextTick(() => {
      this.initThreeCube()
      this.initThreeDrawingLines()
    })
  },
  methods: {
    initThreeCube() {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      this.$refs['three-cube'].appendChild( renderer.domElement );

      const geometry = new THREE.BoxGeometry( 1, 1, 1 );
      const material = new THREE.MeshBasicMaterial( { color: '#FFFFFF' } );
      const cube = new THREE.Mesh( geometry, material );
      scene.add( cube );

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
      }

      if ( WebGL.isWebGLAvailable() ) {
        // Initiate function or other initializations here
        animate();
      } else {
        const warning = WebGL.getWebGLErrorMessage();
        this.$refs['three-cube'].appendChild( warning );
      }
    },
    initThreeDrawingLines() {
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      this.$refs['three-drawlines'].appendChild( renderer.domElement );

      const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
      camera.position.set( 0, 0, 100 );
      camera.lookAt( 0, 0, 0 );

      const scene = new THREE.Scene();

      //create a blue LineBasicMaterial
      const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

      const points = [];
      points.push( new THREE.Vector3( - 10, 0, 0 ) );
      points.push( new THREE.Vector3( 0, 10, 0 ) );
      points.push( new THREE.Vector3( 10, 0, 0 ) );

      const geometry = new THREE.BufferGeometry().setFromPoints( points );

      const line = new THREE.Line( geometry, material );
      scene.add( line );
      renderer.render( scene, camera );
    }
  }
}
</script>

<style>

</style>