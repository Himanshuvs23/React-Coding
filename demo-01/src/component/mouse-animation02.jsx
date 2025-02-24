import { useState } from "react";

export function MouseAnimation02 (){
    const [styleObj , setStyleObj] = useState({position :'fixed', left:'',top:''});
    function handleMouseMove(e){
        setStyleObj({
            position:'fixed',
            left:e.clientX,
            top:e.clientY
        })
     }
        return(


            <div className="container-fluid" onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>Move mouse pointer to test</div>
            <img style={styleObj} src="logo192.png" width="50" height="50" />
        </div>
        )
    
}