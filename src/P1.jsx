import C1 from './C1.jsx'
import { useState } from 'react'

function P1() {
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
            {isOpen && <C1 CtoP1={Str} name="Anti" id="1" question1="How did you know about us?"/>}
            <button className="bg-green-400 border-2" onClick={Toggle}>Click to view the First question</button>
          </div>
         
        </>
        );
      }
export default P1
