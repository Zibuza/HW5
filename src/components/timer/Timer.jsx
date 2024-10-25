import {useState, useEffect} from 'react'

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
    <div>
        <h1>{time}</h1>
        <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={() => {setIsRunning(false); setTime(0)}}>Reset</button>
    </div>
  )
}
