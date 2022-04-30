// import './App.scss';
import React, { useEffect, useState } from 'react';

import { io } from "socket.io-client";
import BackgroundScene from './components/Background/BackgroundScene';
import { MsgBox } from './components/MsgBox/MsgBox';
import { IntroPage } from './pages/IntroPage/IntroPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const socket = io("localhost:80");
// export const socket = io.connect("https://lifeboat-host-1760747-1302413344.ap-shanghai.run.tcloudbase.com");


function App() {
  const [openMsgBox, setOpenMsgBox] = useState(false);

  useEffect(() => {
    // const soc = io.connect("https://lifeboat-host-1760747-1302413344.ap-shanghai.run.tcloudbase.com");
    // soc.on("establish", (_) => {setSocket});
  }, []);

  return (
    // <div>
    //   <BackgroundScene />
    //   {/* <h1>Lifeboat</h1>
    //   <Panel />
    //   <MsgBox /> */}
    // </div>
    <React.Fragment>
      {/* <div id='testback'></div> */}
      <BackgroundScene />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme='dark'
      />
      <IntroPage />
      {openMsgBox &&
        <MsgBox onfinish={() => setOpenMsgBox(false)}>
          <h1>hello</h1>
          <h1>hello</h1>
        </MsgBox>
      }
      {/* <Handcards /> */}
      {/* <Profile character="Captain" image="/captain.png" playerName="Jay" /> */}
    </React.Fragment>
  );
}

export default App;
