import './BackgroundScene.scss';
import React, { Suspense, useEffect, useRef, useState } from 'react';

import { io } from "socket.io-client";

import { Canvas, useThree } from "@react-three/fiber";
import { Box, Ocean } from '../../3DObjects/Ocean';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { Fog, FogExp2 } from 'three';
import { Mountain } from '../../3DObjects/Mountain';
import { Sky } from '../../3DObjects/Sky';
import { Clouds } from '../../3DObjects/Clouds';
import { Stars } from '../../3DObjects/Stars';
import { Shark } from '../../3DObjects/Shark';
import { Boat } from '../../3DObjects/Boat';
import { Captain } from '../../characters/Captain';
import { Loader } from '../Loader/Loader';
import { Huang } from '../../characters/Huang';
import { Mate } from '../../characters/Mate';
import { Stephen } from '../../characters/Stephen';
import { Frenchy } from '../../characters/Frenchy';
import { Lauren } from '../../characters/Lauren';
import { Kid } from '../../characters/Kid';
import { Harter } from '../../characters/Harter';

const CameraController = () => {
  const { camera, gl, scene } = useThree();

  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      camera.fov = 50;
      camera.position.set(20, 10, 80);
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

function BackgroundScene(props) {
  const [sceneLoaded, setSceneLoaded] = useState(0);
  const [sceneDisplayed, setSceneDisplayed] = useState(false);

  const sceneReady = () => {
    setSceneLoaded((old) => old + 1);
  }

  const enterScene = () => {
    setSceneDisplayed(true);
    props.onFinish();
  }

  useEffect(() => {
    console.log(sceneLoaded)
  })

  return (
    <div id='background'>
      <Canvas>
        <Suspense fallback={<Box />}>
          <CameraController />

          <ambientLight
            intensity={0.1}
          />
          <directionalLight
            intensity={0.8}
            position={[2, 2, 2]}
          />

          <Harter />
          

          <Mountain onFinish={sceneReady} />
          <Stars onFinish={sceneReady} />
          <Sky onFinish={sceneReady} />
          <Ocean onFinish={sceneReady} />
          <Boat onFinish={sceneReady} />
          {/* <Shark /> */}
        </Suspense>

      </Canvas>
      {!sceneDisplayed && <div id='scene-cover'>
        {sceneLoaded === 5 ?
          <button className='enter' onClick={enterScene}>Enter</button> :
          <Loader text="loading" />
        }
      </div>}
    </div>

  );
}

export default BackgroundScene;


{/* <rectAreaLight
          lookAt={[0, 20, 0]}
          intensity={0.4}
          color={0x22d8ee}
          width={60}
          height={40}
          /> */}
