import { useState, useEffect } from "react";
import "./mouseCoordinates.css"
export default function MoueCoordinates() {
  const [cords, setCords] = useState({ x: 0, y: 0 });

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
        setCords({x: e.clientX, y: e.clientY})
    })
  },[])

    

  return(
    <div className="coordinates">
        <h1>Mouse Coordinates</h1>
        <p>x: {cords.x}</p>
        <p>y: {cords.y}</p>
    </div>
  )
   
}
