import React, { useState } from "react";
// import bg from './assets/background-live.jpeg'
import bg from '../../assets/background-live.jpeg'
import Header from "../header/Header";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";
const iconsStyle = {
  overflow: "hidden",
  height: "100vh",
  width: "100vw",
  
};


const MainLayout = () => {
  let [togglePallete,setPallete] = useState(true);

  let navigate = useNavigate();
   window.addEventListener('keydown', function (val) {
    if ((val.metaKey || val.ctrlKey) && val.key === 'k') {

     if(togglePallete){
      navigate('/pallete')
      setPallete(false);
     }
     else{
      navigate('/');
      setPallete(true);

     }
    }
  })

  return (
    <div
      className="h-screen w-full bg-cover relative overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />

      <div style={iconsStyle}>
        <Outlet />
      </div>
    </div>
  );
};


export default MainLayout;
