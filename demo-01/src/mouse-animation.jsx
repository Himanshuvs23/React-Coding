import { use, useState } from "react";
import './mouse-animation.css';



export function MouseAnimation(){

    const [animationSpeed,setanimationSpeed]=useState('5s');
    function handleMouseOver(e){
        setanimationSpeed('1s')
    }
    function handleMouseOut (e){
        setanimationSpeed('5s')
    }
    return(
        
        <div className="container-fluid d-flex bg-dark justify-content-center align-items-center" style={{height:'100vh'}}>

            <img src="logo192.png" alt="react" className="react-logo" onMouseOver={handleMouseOver} onMouseUp={handleMouseOut} style={{animationDuration:animationSpeed}}/>
        </div>
    )
}