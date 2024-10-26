import {useState, useEffect} from 'react'
import "./timer.css"
export default function timer() {
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if(isRunning) {
            const interval = setInterval(() => setTime(t => t + 1), 1000)
            return () => clearInterval(interval)
        }
    }, [isRunning])
    return (
      <div className='timmer'>
          <h1 className='time'>{time}s</h1>
          <button className='start' onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Pause" : "Start"}</button>
          <button className='reset' onClick={() => {setIsRunning(false); setTime(0)}}>Reset</button>
      </div>
    )
}
