// this is emi calculator

import { useState } from "react";

export function EmiCalculator(){

    const [principle, setPrinciple ] = useState('');
    const  [rate, setRate]= useState('');
    const [years,setYears]= useState ('');
    const [emi,setEmi]=useState('');

    function handleChangePrinciple(e){
        setPrinciple(e.target.value);
    }
    function handleChangeRate(e){
        setRate(e.target.value);        
    }
    function handleChangeYears(e){
        setYears(e.target.value);
    }
    
    function handleEmi()
    {
        var P = principle;
        var r = rate/(12*100);
        var n = years*12;
        var emi = P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
        setEmi(emi);
    }
    return(
        <div className="container-fluid bg-secondary  " style={{height:'100vh'}}>
            <h2 className="text-center text-white mt-1" >Personal EMI calculator</h2>

            <div className="p-4 m-4 boder border-1 border-dark bg-light rounded-2 " >
                <div className="my-4 row" >
                    <div className="col ">
                    Amount you need &#8377; <input type="text" value={principle}/>

                    </div>
                    <div className="col ">
                        for <input type="text" size='2' value={years} />Years

                    </div>
                    <div className="col ">
                    Intesert Rate <input type="text" value={rate} /> %
                    </div>
                </div>

    
                <div className="row my-4"> 
                    <div className="col">

                    <h6 className="text-dark text-center" > Set Principle amount</h6>

                        <input type="range" min={100000} max={500000} value={principle} onChange={handleChangePrinciple} className="form-range"/>
                        <span>&#8377;1,00,000</span>
                        <span className="float-end">&#8377;5,00,000</span>
                    </div>
                    
                    <div className="col">

                    <h6 className="text-dark text-center" > Set Years</h6>
                        <input type="range" min={1} max={5} value={years} onChange={handleChangeYears} className="form-range"/>
                        <span>1</span>
                        <span className="float-end">5</span>
                    </div>

                    <div className="col">
                    <h6 className="text-dark text-center" > Interest Rate</h6>
                        <input type="range" min={10.50} max={18.50} value={rate} onChange={handleChangeRate} className="form-range"/>
                        <span>10.50%</span>
                        <span className="float-end">18.50%</span>
                    </div>
                    
                </div>

                <div className="row my-4">
                    <div className="col text-center">
                        <button onClick={handleEmi} className="btn btn-primary">Calculate Emi</button>
                    </div>
                </div>

                <div className="row my-4">
                    <div className="col">
                        <p className="text-center"> Your EMI is <span className="fw-bold fs-4 text-primary" > {Math.round(emi).toLocaleString('en-in' , {style:'currency', currency:'INR'})}</span> for next {years*12} Months. </p>
                    </div>

                </div>

            </div>

        </div>
    )
}