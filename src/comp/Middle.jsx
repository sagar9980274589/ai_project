import React, { useContext, useState } from "react";
import "./Middle.css";
import Sboxes from "./Sboxes";
import Bbox from "./Bbox";
import SearchBox from "./SearchBox";
import { Context } from "../context";

const Middle = ({ inpref,  ...props }) => {
  const{onSent,showResult,recentPrompt, loading,resultData,setInput,input}=useContext(Context);
  
  const [name, uname] = useState("Sagar");
  const dark = props.dvalue;
  const width=screen.availWidth;

  return (
    <>
   
      <div className={dark == false ? "mid bgblack" : "mid bgwhite"}>
        {!showResult?<>
        
          <div className="midup">
          <div className="hci">
            <div className="name">Hello,{name}</div>
            <div>How can i help u today?..</div>
          </div>

          <div className="container">
            <Sboxes des="1st box" />
            <Sboxes des="2nd box" />
            <Sboxes des="3rd box" />
          {width>735 ? <Sboxes  des="4th box" /> : null} 
          
          </div>
          <Bbox />
        </div>
        
        </>:<div className="result">
          <div className="result-title">
            <img src="https://i.pinimg.com/236x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg" alt="" />
            <p className="userprompt">{recentPrompt}</p>
          </div>
          <div className="result-data">
         <img src="geminilogo.png"></img>
         {loading?<div className="loader">
          <hr />
          <hr />
          <hr />
         </div>:<p dangerouslySetInnerHTML={{ __html:resultData}}></p> }
             
          </div>
          
          </div>}
       
        <div className="mid_down">
          <SearchBox  input={input} inpref={inpref}  />
        </div>
        
      </div>
    </>
  );
};

export default Middle;
