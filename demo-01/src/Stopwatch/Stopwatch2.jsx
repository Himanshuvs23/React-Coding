import { useEffect, useState , useRef } from "react";

export function Stopwatch1 () {
    
    const [running,setRunning]=useState(false)
    const [timeSetter, setTimeSetter]= useState(0)
    const Starttimeid =useRef(0);
    const thread = useRef(null)

    useEffect(()=>{
        if(running){
        thread.current = setInterval(()=>{
         setTimeSetter(Date.now() - Starttimeid.current )    
        },10);
    }

        return ()=>{
            clearInterval(thread.current)
        }
    
        
  },[running]);


    function Start(){
        setRunning(true)
       Starttimeid.current = Date.now()-timeSetter
    }

    function Stop(){
        setRunning(false)
      
    
    }
   function reset(){
    setTimeSetter(0) 
        setRunning(false)
        
       
    }

    function formatTime(){
        
        let hours = Math.floor(timeSetter/(1000*60*60))
        let min = Math.floor(timeSetter/(1000*60)%60)
        let sec = Math.floor(timeSetter/(1000)%60)
        let milisec = Math.floor(timeSetter%(1000)/60)

        hours = String(hours).padStart(2,'0')
        min = String(min).padStart(2,'0')
        sec = String(sec).padStart(2,'0')
        milisec = String(milisec).padStart(2,'0')
        

        return `${hours}:${min}:${sec}:${milisec}`
    }
     

    return(
        
        <div className="container-fluid ">

            <div className="mt-5 text-bold fs-4 border border-dark border-1 rounded rounded-1 d-flex justify-content-center text-center"> {formatTime()}</div>

            <div className="mt-4 text-center">
                <button className="btn btn-primary ms-2" onClick={Start}>Start</button>
                <button className="btn btn-danger ms-2" onClick={Stop} >Stop</button>
                <button className="btn btn-warning ms-2 " onClick={reset}>Restart</button>

            </div>

        </div>
    )
    
}