import { useEffect, useRef, useState } from "react"

export function Timeticking(){

    const [timer, setTimer] = useState();
    const [Wish, setWish] = useState('');

 
    
    function Clock(){
        var now = new Date();
        setTimer(now.toLocaleTimeString());
       
    

        
    }

function handleWish(){
         var now = new Date();
        var hours = now.getHours();
        if(hours < 12){
           return'Good Morning' 
        }else if(hours < 16){
           return'Good Afternoon' ;
        }else{
           return'Good Evening' ;
        }
    }

    useEffect(()=>{
        setInterval(Clock,1000);
        setWish(handleWish());
    },[])

    return(
        <div className="container-fluid text-center">
            <h1 className="mt-3">{timer}</h1>

           <div><h1 >{Wish}</h1></div> 
        </div>


    )
}