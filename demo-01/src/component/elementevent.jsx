import { useState } from "react";

export function Btndemo(){
    const [tip, setTip]= useState('');
    const [username,setUsername] =useState('');

    function handleOnBlur(){
        setTip('Name in Block Letters')
    }
    function handleOnFocus(){
        setTip('')
        setUsername(username.toUpperCase())

    }
    function handleChange(e){
        setUsername(e.target.value)
    }
    return(
<div className="container-fluid">
    <h2>Ristration </h2>
    <dl>
        <dd>
        <input type="text" value={username} onBlur={handleOnBlur} onFocus={handleOnFocus} onChange={handleChange} />
        </dd>
        <dd>{tip}</dd>
    </dl>

</div>
    )

    
}