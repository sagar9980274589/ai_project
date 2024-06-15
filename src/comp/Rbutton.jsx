import React from "react";
import "./Rbutton.css";
// import {data} from './SearchBox.jsx';
function Rbutton(props) {
  return (
    <div>
      <button className="Rbutton">
        {/* {data} */}
          {props.logo} {props.rchat}
            <span id="dots" className="material-symbols-outlined ">
          more_vert
        </span>
       </button>
    </div>
  );
}

export default Rbutton;
