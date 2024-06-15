import React,{useRef, useState} from "react";
import "./Act.css";
import Rbutton from "./Rbutton";

const Act = (props) => {
  
const dark=props.dvalue;
 
  
  

  
  return (
    
    <div  className={dark==true?"act bgblack":"act bgwhite"}>
      <div className="up1">
        <span className="lst material-symbols-outlined">lists</span>
   
        <button  className="NC">
          <span className="material-symbols-outlined">add</span> New chat
        </button>
      </div>
      <div className="mid1">
        Recent
        <Rbutton 
          rchat="how to do ..."
          logo={<span className="material-symbols-outlined">chat_bubble</span>}
        />
        <Rbutton
          rchat="how to do ..."
          logo={<span className="material-symbols-outlined">chat_bubble</span>}
        />
        <Rbutton
          rchat="how to do ..."
          logo={<span className="material-symbols-outlined">chat_bubble</span>}
        />
      </div>
      <div className="foot1">
        <Rbutton
          rchat="Help"
          logo={<span className="material-symbols-outlined">help</span>}
        />
        <Rbutton
          rchat="Activity"
          logo={<span className="material-symbols-outlined">history</span>}
        />
        <Rbutton
          rchat="Settings"
          logo={<span className="material-symbols-outlined">settings</span>}
        />
      </div>
    </div>
  );

};

export default Act;
