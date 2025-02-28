//code for verifying user name is already existed or not
//if user name is already existed then it will show message in red color
//if user name is not existed then it will show message in green color

//if user press any key in caps then it will show warning message in yellow color
//if user press any key in small then it will hide warning message

//verify password strenght with meter and bootstrap progress based on password strength

//importing axios for fetching data from json file
//importing useState for creating state variable




import axios from "axios";
import { useState} from "react";

export function KeyboardEvent(){
    const [Username,setUsername]=useState('');
    const [statusMsg,setStatusMsg]=useState('');
    const [errorClass,setErrorClass]=useState('');
    const [passMsg,setPassMsg]=useState('');
    const[strength,setStrength]=useState('0');
    const[progressClass,setProgressClass]=useState('');
    const [progressWidth,setProgressWidth]=useState({width:''});

    const[toggle,setToggle]=useState('d-none')

    function handleuser(e){
        setUsername(e.target.value);
    }
    function VerifyUser(){
        axios.get('users.json')
        .then(response => {
            for(var user of response.data){
                if(user.username === Username){
                    setStatusMsg('Users is already existed')
                    setErrorClass('text-danger')
                    break;
                }else{
                    setStatusMsg('User Name is Available');
                    setErrorClass('text-success')
                }
            }
        })
    }

    function handlePasswordChange(e){
        if(e.target.value.match(/[a-z]/) && e.target.value.match(/[A-Z]/) && e.target.value.match(/[0-9]/) && e.target.value.match(/[^a-zA-Z\d]/)){
            setStrength('100');
            setPassMsg('Strong Password')
            setProgressClass('progress-bar bg-success progress-bar-striped progress-bar-animated')
            setProgressWidth({width:'100%'})
        }else if(e.target.value.length>=8){
            setStrength('50');
            setPassMsg('Medium Password')
            setProgressClass('progrss-bar bg-danger progress-bar-striped progress-bar-animated')
            setProgressWidth({width:'50%'})
      }else{
        setStrength('25')
        setPassMsg('Weak Password')
        setProgressClass('progrss-bar bg-warning progress-bar-striped progress-bar-animated')
        setProgressWidth({width:'25%'})
    }
 }

    function VerifyCaps(e){
        if(e.which>=65 && e.which<=90){
            setToggle('d-block');
        }else{
            setToggle('d-none');
        }

    }
    return(
        <div className="container-fluid" style={{height:'100vh'}}> 

     <h3>Registration Form </h3>
     <dl>
        <dt>User Name</dt>
        <dd> <input type="text" className="form-control " onKeyUp={VerifyUser} onChange={handleuser} /> </dd>
        <dd className={errorClass}>{statusMsg}</dd>

        <dt >Password</dt>
        <dd><input type="password" className="form-control" onKeyUp={handlePasswordChange} /></dd>
        <dd>{passMsg}</dd>
        <dd>
            <meter min='0' max='100' value={strength}  ></meter> </dd>

        <div className="progress">
            <div className= {progressClass} style={progressWidth} >
                 {passMsg}
            </div>

        </div>

        <dt >NO cap text</dt>
        <dd><input type="text" onKeyPress={VerifyCaps} /></dd>
        <dd className={toggle}>
            <span className="bi bi-exclamation-triangle text-warning"> Waring CAPS :ON</span>
        </dd>
     </dl>
  </div>
    )
}
