import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Act from "./comp/Act";
import Middle from "./comp/Middle";

function App() {
  const [flag, setflag] = useState(0);
  function toggle() {
    setflag(!flag);
    const tgl = document.getElementsByClassName("scroll")[0];
    const mode = document.getElementsByClassName("mode")[0];
    const m1 = document.getElementById("m1");
    const m2 = document.getElementById("m2");

    if (flag == 1) {
      tgl.style.transform = `translateX(39px)`;
      mode.style.backgroundColor = "white";
      m1.style.color = "rgb(58, 58, 58)";
      m2.style.color = "rgb(58, 58, 58)";
      tgl.style.backgroundColor = "rgb(58, 58, 58)";
      tgl.style.color = "rgb(58, 58, 58)";
      mode.style.border = "1px solid black";
    } else {
      tgl.style.transform = `translateX(0px)`;
      mode.style.backgroundColor = "rgb(58, 58, 58)";
      m1.style.color = "white";
      m2.style.color = "white";
      tgl.style.backgroundColor = "white";
      tgl.style.color = "white";
      mode.style.border = "1px solid white";
    }
  }

  return (
    <>
      <div className="page">
        <div className={flag == true ? "nav bgblack" : "nav bgwhite"}>
          <div className="logo">
            <span>COMPANY_NAME</span>
            <div onClick={toggle} className="mode">
              <div className="scroll">.</div>
              <span id="m1" className="  material-symbols-outlined">
                dark_mode
              </span>
              <span id="m2" className=" material-symbols-outlined">
                light_mode
              </span>
            </div>
          </div>
          <div className="options">
            <div className="lbox">
              <button className="btn">try advanced</button>
            </div>
            <div className="gaccount">G</div>
          </div>
        </div>

        {/* <Nav className="nav" dvalue={dvalue}/> */}
        <Act className="act" dvalue={flag} />
        <Middle className="middle" dvalue={flag} />
      </div>
    </>
  );
}

export default App;
