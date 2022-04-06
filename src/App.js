import './App.css';
import React, { Suspense, useEffect, useRef } from 'react';
import { IntroPage } from './IntroPage';
import { JoinPage } from './pages/JoinPage';
import { CreatePage } from './pages/CreatePage';

import { io } from "socket.io-client";

import { Canvas, useThree } from "@react-three/fiber";
import { Box, Ocean, OceanBed } from './3DObjects/Ocean';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { Fog, FogExp2 } from 'three';
import { Volcano } from './3DObjects/Volcano';
import { Sky } from './3DObjects/Sky';
import { Clouds } from './3DObjects/Clouds';

const CameraController = () => {
  const { camera, gl, scene } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      camera.fov = 50;
      camera.position.set(0, 1.5, 63);
      camera.updateProjectionMatrix();
      // controls.minDistance = 54;
      // controls.maxDistance = 64;
      // // scene.fog = new THREE.Fog(0xeeeeee, -3, 20);
      // controls.minAzimuthAngle = -Math.PI * 0.15;
      // controls.maxAzimuthAngle = Math.PI * 0.15;
      // controls.minPolarAngle = Math.PI * 0.42;
      // controls.maxPolarAngle = Math.PI * 0.49;
      controls.enablePan = false;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

function App() {
  useEffect(() => {
    const soc = io.connect("http://lifeboat-server-8gvcn1ygb73792bf-1302413344.ap-shanghai.app.tcloudbase.com");
    console.log("success");
  }, []);

  return (
    <Canvas>
      <CameraController />
      <ambientLight
        intensity={0.3}
      // color={0xbb2244}
      />
      <directionalLight
        intensity={0.7}
        position={[-1, 1, -0.7]}
        castShadow={true}
      />
      <Ocean />
      <Volcano />
      <Box position={[0, 0, 58]} />
      <Sky />
      <Clouds />
    </Canvas>

  );
}

export default App;
