import { useState,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sact from "./comp/Sact"

import Act from "./comp/Act";
import Middle from "./comp/Middle";

  
// const leftChatObj = ["","",""];

function App() {
  const inputRef = useRef("");
  const actref = useRef("");
  const [data, setData] = useState([[""]]);
  
  const[idx,setidx]=useState(1);
  function drop(){
    
 
    
    actref.current.style.zIndex = 9;
    
    }
function handletext(){
  

console.log(idx);



  const inputValue = inputRef.current.value;
 
  // leftChatObj.push={inputValue} ;
  

  setData(prev=>({...prev,...prev[idx]=[`${inputValue}`]}));

  setidx(idx+1);
  if(idx==4)
    {
    setidx(2);
   
    }

}




const tgl=useRef();
const mode=useRef();
const m1=useRef();
const m2=useRef();

  const [flag, setflag] = useState(1);
  const[text,edittext] = useState("recent search");

  function toggle() {
    setflag(!flag);
   
    
   

    if (flag == 1 ) {
      tgl.current.style.transform = `translateX(39px)`;


      mode.current.style.backgroundColor = "rgb(58, 58, 58)";
      m1.current.style.color = "white";
      m2.current.style.color = "white";
      tgl.current.style.backgroundColor = "white";
      tgl.current.style.color = "white";
      mode.current.style.border = "1px solid white";

      
    } else {
      tgl.current.style.transform = `translateX(0px)`;
     


      mode.current.style.backgroundColor = "white";
      m1.current.style.color = "rgb(58, 58, 58)";
      m2.current.style.color = "rgb(58, 58, 58)";
      tgl.current.style.backgroundColor = "rgb(58, 58, 58)";
      tgl.current.style.color = "rgb(58, 58, 58)";
      mode.current.style.border = "1px solid black";
    }
  }

  return (
    <>
    
      <div className="page">
        <div className={flag == false ? "nav bgblack" : "nav bgwhite"}>
        <span onClick={drop} className="material-symbols-outlined menu">
menu
</span>
          <div className="logo">
            <span className="logo1">THINK AI<span className="material-symbols-outlined">
smart_toy
</span></span>
            <div ref={mode}onClick={toggle} className="mode">
              <div ref={tgl}className="scroll">.</div>
              <span ref={m1}id="m1" className="  material-symbols-outlined">
                dark_mode
              </span>
              <span ref={m2} id="m2" className=" material-symbols-outlined">
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

       
      
        <Act  actref={actref} className="act " data={data} dvalue={flag} />
        <Middle className="middle" inpref={inputRef} handletext={handletext} dvalue={flag} />
      </div>
    </>
  );
}

export default App;
