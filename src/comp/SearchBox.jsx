import React, { useState, useRef } from "react";
import "./SearchBox.css";

const SearchBox = () => {
  const inputRef = useRef("");
  const [data, setData] = useState({ name: "sagar" });
  const leftChatObj = [{}];

  function handleInput() {
    const inputValue = inputRef.current.value;
    leftChatObj.push({ name: "shaiva" });
    leftChatObj.push({ name: inputValue });
    setData(leftChatObj);
  }
  console.log(data);
  return (
    <>
      <div className="SearchBox">
        <div className="me">
          <input
            ref={inputRef}
            type="search"
            name="prompt"
            placeholder="type here... "
            className="SearchBoxi"
          />
          <div>
            <span onClick={handleInput} className="material-symbols-outlined ics">
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
