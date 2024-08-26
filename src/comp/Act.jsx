import React, { useContext,useRef, useState } from "react";
import "./Act.css";
import Rbutton from "./Rbutton";
import { Context } from "../context";
const Act = ({ actref,recentval,currentval,prevval, ...props }) => {
  const{newchat,setrecentPrompt,prevPrompt,onSent,showResult,recentPrompt, loading,resultData,setInput,input}=useContext(Context);
  const dark = props.dvalue;
  function back() {
    actref.current.style.zIndex = -1;
  }
const loadPrompt =async(prompt)=>{
  setrecentPrompt(prompt);
  await onSent(prompt);
}
  return (
    <>
      <div ref={actref} className={dark == false ? "act  bgblack1" : "act  "}>
        <div className="up1">
          <span onClick={back} className="lst material-symbols-outlined">
            lists
          </span>

          <button onClick={newchat}className="NC">
            <span className="material-symbols-outlined">add</span> New chat
          </button>
        </div>
        <div className="mid1">
          Recent search
          
          {prevPrompt.slice(0).reverse().map((el,idx)=>{
            if(idx<4)
            {
           return <Rbutton onClick={()=>loadPrompt(el)}
           key={idx}
            rchat={el.slice(0,18)}
            logo={
              <span className="material-symbols-outlined">chat_bubble</span>
            }
          />
          }
          
          })}
          
          
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

export default Act;
