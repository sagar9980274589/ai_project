import React, { useState, useRef } from "react";
import "./SearchBox.css";

const SearchBox = ({ fun,inpref }) => {
 
  

 

  return (
    <>
      <div className="SearchBox">
        <div className="me">
          <input
            ref={inpref}
            type="search"
            name="prompt"
            placeholder="type here... "
            className="SearchBoxi"
          />
          <div>
            <span
              onClick={fun}
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
