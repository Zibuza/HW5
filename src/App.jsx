import { useState, useEffect } from 'react';
import Timer from "./components/timer/Timer"
import MouseCoordinates from "./components/mouseCoordinates/MouseCoordinates"
import "./App.css"

function App() {
  const hiddenWord = "hello16"
  const [typedText,setTypedText] = useState("")

  const handlePress = (e)=> {
    setTypedText(prev => prev + e.key)
  }
  useEffect(()=>{
    window.addEventListener("keypress", handlePress)     

    return () => {
      window.removeEventListener("keypress", handlePress);
    };
  }, [])

  return (
    <div>
    <div className="first">
      <h1>Type something:</h1>
      {typedText.includes(hiddenWord) ? <h2>{hiddenWord} found </h2> : <h2>keep trying...</h2>}
    </div>      
      <Timer/>
      <MouseCoordinates/>
    </div>
    
  );
}

export default App;
