import { useState } from 'react'
import './App.css'
console.log("Q1");

function C1(Str) {
  const [data, setData] = useState("(Answer please)")
  const message=" Hi, I am the first Child"
  return (
    <div  className="bg-yellow-500 w-[2000px] h-[800px]  flex flex-col gap-10">
    <div className="bg-yellow-500 m-5">
      <p className="p-3 text-black rounded-lg border-2 text-2xl" >Name: {Str.name}, Id: {Str.id}</p> 
      </div>
    <div>
      <p>{Str.question1}</p>
      <p>Answer is: <i  className="text-gray-500">{data}</i></p>
      <input className="p-5" type="text" placeholder='Answer promptly' onChange={(e)=>{setData(e.target.value)}}></input>
      <h5 className="text-purple-700 m-5">{Str.CtoP1(message)}</h5>
    </div></div>
      )
  }
  export default C1


