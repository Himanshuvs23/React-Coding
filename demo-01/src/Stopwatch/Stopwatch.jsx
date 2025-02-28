import React, {useState , useRef} from 'react';
export function Stopwatch(){
    const [hr, setHr] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [milisec, setMilisec] = useState(0);


    const thread = useRef(null);


    
    let count=0;
    let hour=0;
     let minute=0;
     let second=0;

  function counter(){
    count++;
    setMilisec(count);

    if(count === 10){
        count=10;
        second++;
        setSec(second);       
    }


    if(second===59){
        setSec(0);
        minute++;
        setMin(minute);
    }
    if(minute===59){
        setMin(0);
        hour++;
        setHr(hour);
    }
  }
  function handleStart(){
    thread.current = setInterval(counter,1);
  }
  function handleStop(){
    clearInterval(thread.current);
  }
  function handleReset(){
    clearInterval(thread.current);
    setHr(0);
    setMin(0);
    setSec(0);
    setMilisec(0);
    count=0;
  }
  
    return(
        <div className="container-fluid d-flex justify-content-center">

            <div>

            

            <div className=" mt-4 border border-1 border-dark row p-1 fs-4 fw-bold" style={{height:'60px', width:'600px'}}>
                <div className="col border border-1 border-dark">
                   {hr} hr
                    </div>
                <div className="col border border-1 border-dark">
                    {min} min
                    </div>
                <div className="col border border-1 border-dark">
                    {sec} sec 
                    </div>
                <div className="col border border-1 border-dark">
                    {milisec} ms
                    </div>
               </div>
                    <button className="btn btn-primary  mt-4"onClick={handleStart} >Start</button>
                    <button className="btn btn-primary  mt-4 ms-1"onClick={handleStop} >Stop</button>
                    <button className='btn btn-primary mt-4 ms-1' onClick={handleReset}>Restart</button>
            </div>
        </div>
    )
}