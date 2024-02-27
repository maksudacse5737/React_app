import { useState } from 'react'
import './App.css'
console.log("Q1");

function C1({CtoP1,name,id,question1}) {
  const [data, setData] = useState("")
  function check(){
    if(data!=""){
      alert("Answer Accepted");
    }
    else if(data==""){alert("No Answer")}
    ;
  }
  // const message=" Hi, I am the First Child"
  return (
    <div  className="bg-yellow-500 w-[2000px] h-[800px]  flex flex-col gap-10">
    <div className="bg-yellow-500 m-5">
      <p className="p-3 text-black rounded-lg border-2 text-2xl" >Name: {name}, Id: {id}</p> 
      </div>
    <div>
      <p>{question1}</p>
      <p>Answer is: <i  className="text-gray-500">{data}</i></p>
      <input className="p-5" type="text" placeholder='Answer promptly' onChange={(e)=>{setData(e.target.value)}}></input>
      <h5 className="text-purple-700 m-5">{CtoP1("Hi, I am the First Child")}</h5>
      <button className="bg-yellow-500 m-5" onClick={check}>Check Answer</button>
    </div></div>
      )
  }
  export default C1
