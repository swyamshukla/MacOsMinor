import React from "react";
import "./Application.css";



// import googleIcon from '../../assets/icons/google.png';
// import picturesIcon from '../../assets/icons/pictures.png';

const Application = ({ name, icon ,onClick}) => (
  <div 
  onClick={onClick}
    className="container folder"
    style={{
      minWidth: 0,
      minHeight: 0,
      flexShrink: 1,
      maxWidth: '100%',
      boxSizing: 'border-box',
    }}
  >
    <img
      src={icon}
      alt={name}
      style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
    />
    <h4>{name}</h4>
  </div>
);

export default Application;
