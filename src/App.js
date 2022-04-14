import './App.css';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { IntroPage } from './IntroPage';
import { JoinPage } from './pages/JoinPage';
import { CreatePage } from './pages/CreatePage';

import { io } from "socket.io-client";

import { Canvas, useThree } from "@react-three/fiber";
import { Box, Ocean, OceanBed } from './3DObjects/Ocean';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { Fog, FogExp2 } from 'three';
import { Mountain } from './3DObjects/Mountain';
import { Sky } from './3DObjects/Sky';
import { Clouds } from './3DObjects/Clouds';
import { Stars } from './3DObjects/Stars';
import { Shark } from './3DObjects/Shark';
import { Boat } from './3DObjects/Boat';

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
      // scene.fog = new THREE.Fog(0xeeeeee, 1, 120);
      // controls.minAzimuthAngle = -Math.PI * 0.15;
      // controls.maxAzimuthAngle = Math.PI * 0.15;
      // controls.minPolarAngle = Math.PI * 0.42;
      // controls.maxPolarAngle = Math.PI * 0.49;
      // controls.enablePan = false;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

function App() {
  const [light, setlight] = useState(0.7);

  useEffect(() => {
    const soc = io.connect("https://lifeboat-host-1760747-1302413344.ap-shanghai.run.tcloudbase.com");
    soc.on("message", (msg) => {
      setlight(0);
      console.log(msg);
    });
  }, []);

  return (
    <Canvas>
      <ambientLight
        intensity={0.1}
      // color={0xbb2244}
      />
      <CameraController />
      {/* <directionalLight
        intensity={0.1}
        position={[0, 1, -1]}
        castShadow={true}
      /> */}
      <rectAreaLight
        lookAt={[0, 20, 0]}
        intensity={0.4}
        color={0x22d8ee}
        width={100}
        height={100}
      />
      <pointLight
        intensity={0.5}
        distance={40}
        color={0xeeeeaa}
        position={[-7, 6, 55]}
      />
      <Box position={[-7, 6.5, 55]} />
      {/* <directionalLight
        intensity={0.5}
        position={[-2, 2, 55]}
        castShadow={true}
      /> */}
      <Mountain />
      {/* <Clouds /> */}
      <Stars />
      <Sky />
      <Shark />
      <Ocean />
      <Boat />
    </Canvas>

  );
}

export default App;
