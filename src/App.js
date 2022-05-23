// import './App.scss';
import React, { Suspense, useEffect, useState } from 'react';

import { io } from "socket.io-client";
import BackgroundScene from './components/Background/BackgroundScene';
import { MsgBox } from './components/MsgBox/MsgBox';
import { IntroPage } from './pages/IntroPage/IntroPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from './3DObjects/Ocean';
import { GamePage } from './pages/GamePage/GamePage';
import { Loader } from './components/Loader/Loader';
export const socket = io("localhost:80");
// export const socket = io.connect("https://lifeboat-host-1760747-1302413344.ap-shanghai.run.tcloudbase.com");


function App() {
  const [openMsgBox, setOpenMsgBox] = useState(false);

  const [gameGoing, setGameGoing] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <React.Fragment>
      <BackgroundScene onFinish={() => setLoaded(true)} />
      {loaded && <React.Fragment>
        <ToastContainer
          position="top-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          draggable
          theme='dark'
        />
        {gameGoing ? <GamePage /> : <IntroPage startGame={() => { setGameGoing(true) }} />}
        {openMsgBox &&
          <MsgBox onfinish={() => setOpenMsgBox(false)}>
            <h1>hello</h1>
            <h1>hello</h1>
          </MsgBox>
        }
      </React.Fragment>}
    </React.Fragment>
  );
}

export default App;
