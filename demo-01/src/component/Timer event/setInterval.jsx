import React, { useRef, useState } from 'react';

export function Intervaldemo(){
    const [toggeleBtn,setToggeleBtn]=useState('d-block');
    const [toggleProgress,setToggleProgress]=useState('d-none');
    const [toggleImage,setToggleImage]=useState('d-none');
    const [pvalue,setpvalue]=useState(1);
    const [status,setStatus]=useState('');

    const progressValue = useRef(null);
    const thread = useRef(null);
    const ref = useRef(null);

    let count=1;
    function startProgress (){
        count++;
    setpvalue(count);
    progressValue.current = count;
    if (count ===100){
        clearInterval(thread.current);
        setToggleProgress('d-none');
        setToggleImage('d-block');
        // clearInterval();
     }

    }

    function LoadImage(){
        setToggeleBtn('d-none');
        setToggleProgress('d-block');
        thread.current =setInterval(startProgress,100);

    }
    function pauseClick(){
        clearInterval(thread.current)
        setStatus('Paused')

    }
    function playClick(){
        thread.current=setInterval(startProgress,100)
        setStatus('')
    }
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center text-center " style={{height:'100vh'}} > 
            <div>
                <div className={toggeleBtn} >
                    <button  onClick={LoadImage} className="btn btn-primary" >Load Image</button>
                </div>

                <div className={toggleProgress}>
                    <progress max={100} min={1} value={progressValue.current}  ></progress>
                    <div className='my-2'>
                        <button onClick={playClick} className='btn btn-primary bi bi-play '>Play</button>
                        <button onClick={pauseClick} className='btn btn-danger bi bi-pause'>Pause</button>
                    </div>
                    <div>
                        {pvalue}% Completed {status}
                    </div>
                </div>

                <div className={toggleImage}>
                    <img src="iphoneimage.png" alt="I phone "  width="300" height="400"/>
                </div>

            </div>
        </div>
    )
}