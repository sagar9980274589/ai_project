import React, { useState } from "react";
import "./Middle.css";
import Sboxes from "./Sboxes";
import Bbox from "./Bbox";
import SearchBox from "./SearchBox";
import Dis from "./Dis";
const Middle = ({ inpref, handletext, ...props }) => {
  const [name, uname] = useState("Sagar");
  const dark = props.dvalue;
  const width=screen.availWidth;

  return (
    <>
   
      <div className={dark == false ? "mid bgblack" : "mid bgwhite"}>
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
        <div className="mid_down">
          <SearchBox inpref={inpref} fun={handletext} />
        </div>
        <Dis />

      </div>
    </>
  );
};

export default Middle;
