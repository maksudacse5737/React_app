import React from 'react'
import ReactDOM from 'react-dom/client'
import P1 from './P1.jsx'
import P2 from './P2.jsx'
import P3 from './P3.jsx'


import './index.css'
console.log("main")
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <P1/>
    <P2/>
    <P3/>
  </React.StrictMode>,
)
