import React, { useState, useRef, useContext } from "react";
import "./SearchBox.css";
import { Context } from "../context";

const SearchBox = ({ inpref }) => {
 
  const{onSent,showResult,recentPrompt, loading,resultData,setInput,input}=useContext(Context);

 

  return (
    <>
      <div className="SearchBox">
        <div className="me">
          <input
          onChange={(e)=>setInput(e.target.value)}
          value={input}
            ref={inpref}
            type="search"
            name="prompt"
            placeholder="type here... "
            className="SearchBoxi"
          />
          <div className="icons">
            <span
             onClick={()=>onSent()}
              className="material-symbols-outlined ics"
            >
              send
            </span>
            <span className="material-symbols-outlined ics">add_a_photo</span>
            <span className="material-symbols-outlined ics">mic</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
