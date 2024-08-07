import React,{useRef, useState} from "react";
import "./Sact.css";
import Rbutton from "./Rbutton";

const Sact = ({actref,data,...props}) => {
  const dark = props.dvalue;


  return (
    <>
    <div ref={actref}  className={dark==false?"act  bgblack1":"act  "}>
      <div className="up1">
        <span className="lst material-symbols-outlined">lists</span>
   
        <button  className="NC">
          <span className="material-symbols-outlined">add</span> New chat
        </button>
      </div>
      <div className="mid1">
        Recent search
        <Rbutton 
          rchat={data[0]}
          logo={<span className="material-symbols-outlined">chat_bubble</span>}
        />

        Old search 
       
        <Rbutton 
          rchat={data[2]}
          logo={<span className="material-symbols-outlined">chat_bubble</span>}
        />
        <Rbutton
          rchat={data[3]}
          logo={<span className="material-symbols-outlined">chat_bubble</span>}
        />
        <Rbutton
          rchat={data[4]}
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
    </>
  );

};

export default Sact;
