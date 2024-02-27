import C2 from './C2.jsx'
import { useState } from 'react'

function P2() {
        const [isOpen, setIsOpen] = useState(false);
        
        function Toggle() {
          setIsOpen((isOpen) => !isOpen);
        }
        function Str(str){
          return <p className="p-3 text-red text-2xl border-2"><i>I am parent(Received from Child by function param of Parent component rendered by props of Child component) <br/><h1>{str}</h1></i></p>
        }
        return (
          <>
          <div className="border-2 text-2xl">
            {isOpen && <C2 CtoP2={Str} name="Anti" id="1" question2="What are you interested to know"/>}
            <button className="bg-green-400 border-2" onClick={Toggle}>Click to view the Second question</button>
          </div>
         
        </>
        );
      }
export default P2
