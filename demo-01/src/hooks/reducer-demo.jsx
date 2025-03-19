import { useReducer } from "react";

let initialState={
    ViewerCount : 0 ,
}

 function reducer(state,action){
    switch (action.type){
        case "join":
            return {ViewerCount : state.ViewerCount + 1 };
        case "exit":
            return {ViewerCount: state.ViewerCount-1};
    }
}
  export function Reducerdemo(){
    const [state,dispatch]=useReducer(reducer,initialState)
    
    function JoinClick(){
        dispatch({type:'join'});   
    }
    function ExitClick(){
        dispatch({type:'exit'})
    }
    return(
        <div className="container-fluid" >
          <div className="card mt-4 w-50">
            <div className="card-header">
                <iframe src="https://www.youtube.com/embed/9XdM95r2dUw?si=lw8-P1a91UC12uhW" width="100%" height="300" ></iframe>
            </div> 

            <div className="card-body text-center">
                <h4>Song is streaming live.. </h4>
                <h5> <span className="bi bi-eye"></span> {state.ViewerCount} Viewers </h5>
             </div>

             <div className="card-footer text-center">
                <button onClick={JoinClick} className="bi bi-door-open btn btn-warning">Join</button>
                <button onClick={ExitClick} className="bi bi-door-closed btn btn-danger">Exit</button>
             </div>
          </div>
        </div>
    )
  }