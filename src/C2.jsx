import { useState } from 'react'
import './App.css'
console.log("Q2");

function C2(Str) {
  const [data, setData] = useState("(Answer please)")
  const message=" Hi, I am the Second Child"
  return (
    <div  className="bg-yellow-500 w-[2000px] h-[800px]  flex flex-col gap-10">    
      <p>{Str.question2}</p>
      <p>Answer is: <i  className="text-gray-500">{data}</i></p>
      <input className="p-5" type="text" placeholder='Answer promptly' onChange={(e)=>{setData(e.target.value)}}></input>
      <h5 className="text-purple-700 m-5">{Str.CtoP2(message)}</h5>
    </div>
      )
  }
  export default C2


