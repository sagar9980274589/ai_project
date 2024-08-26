import { createContext, useState } from "react";
import run from "./gemeni";

export const Context = createContext();
const ContextProvider=(props)=>{
const delayPara = (index,nextWord)=>{
    setTimeout(function(){
        setResultData(prev=>prev+nextWord);
    },75*index)


}
const newchat= ()=>{
    setloading(false);
    setShowResult(false);
}
    const[input,setInput]=useState("");
    const[recentPrompt,setrecentPrompt]=useState("");
    const[prevPrompt,setprevPrompt]=useState([]);
    const[showResult,setShowResult]=useState(false);
    const[loading,setloading]=useState(false);
    const[resultData,setResultData]=useState("");
 const onSent = async (prompt) =>{
    setResultData("");
    setloading(true);
    setShowResult(true);
    let response;
    if(prompt!==undefined)
    {
response=await run(prompt);
setrecentPrompt(prompt);
    }
    else{
        setprevPrompt(prev=>[...prev,input]);
        setrecentPrompt(input);
        response=await run(input);

    }
   
   const newResponse= await run(input);
   let responseArray = newResponse.split("**");
   let newArray="";
   for(let i=0;i<responseArray.length;i++)
   {
    if(i==0||i%2!==1){
        newArray+=responseArray[i];

    }else{
        newArray +="<b>"+responseArray[i]+"</b>";
    }
   }
   let newArray2=newArray.split("*").join("</br>");
let newResponseArray=newArray2.split(" ");
for(let i=0;i<newResponseArray.length;i++)
    {
        const nextWord=newResponseArray[i];
        delayPara(i,nextWord+" ");
    } 
   setloading(false);
   setInput("");
 }
 
    const contextValue ={
    prevPrompt,
    setprevPrompt,
    onSent,
    setrecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    newchat,

input,
setInput
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider