import React, { useState } from "react";
import "./Middle.css";
import Sboxes from "./Sboxes";
import Bbox from "./Bbox";
import SearchBox from "./SearchBox";
const Middle = (props) => {
  const [name, uname] = useState("Sagar");
  const dark = props.dvalue;

  return (
    <>
      <div className={dark == true ? "mid bgblack" : "mid bgwhite"}>
        <div className="midup">
          <div className="hci">
            <div className="name">Hello,{name}</div>
            <div>How can i help u today?..</div>
          </div>

          <div className="container">
            <Sboxes des="1st box" />
            <Sboxes des="2nd box" />
            <Sboxes des="3rd box" />
            <Sboxes des="4th box" />
          </div>
          <Bbox />
        </div>
        <div className="mid_down">
        <SearchBox />
        </div>
      </div>
    </>
  );
};

export default Middle;
