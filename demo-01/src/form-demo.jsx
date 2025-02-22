import { useState } from "react";
import React from 'react';
import { MouseAnimation } from "./mouse-animation";

export function FormDemo(){

    const [Theme,setTheme]=useState('border border-2 p-4 rounded');
    const[btnTheme,setbtnTheme]=useState('bi bi-search btn btn-dark w-100');
    const [showAnimation, setShowAnimation] = useState(false);

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('border border-2 p-4 rounded bg-dark text-white');
            setbtnTheme('bi bi-search btn btn-info w-100')
        }else{
            setTheme('border border-2 p-4 rounded')
            setbtnTheme('bi bi-search btn btn-dark w-100')
        }
    }

    const [product,setProduct]=useState({
        Name:'TV',
        Price:0,
        City:'delhi',
        Stock: true
    });
    function handleNameChange(e){
       setProduct ({
        Name:e.target.value ,
        Price: product.Price,
        City : product.City,
        Stock: product.Stock
    }) 
}
function handlePriceChange(e){
    setProduct ({
     Name:product.Name ,
     Price: e.target.value,
     City : product.City,
     Stock: product.Stock
 }) 
} function handleCityChange(e){
    setProduct ({
     Name:product.Name ,
     Price: product.Price,
     City : e.target.value,
     Stock: product.Stock
 }) 
} function handleStockChange(e){
    setProduct ({
     Name:product.Name ,
     Price: product.Price,
     City : product.City,
     Stock: e.target.checked
 }) 
}
  function handelSubmitClick(){
    setShowAnimation(true);
     console.log(product);
    
  }
 return(
    <div className="container-fluid">
        {(showProduct)?<MouseAnimation/>:(
        <div className={Theme}>
            <div> <input type="checkbox" onChange={handleThemeChange}/> <label >Dark Theme</label> </div>
            <h3>Product Details</h3>
            <dl>
                <dt>Product Name</dt>
                <dd>
                <select value={product.Name} onChange={handleNameChange}>
                        <option >Select Product</option>
                        <option >TV</option>
                        <option >Mobile</option>
                        <option >Washing Maching</option>
                        <option >Fashion</option>
                    </select>
                </dd>
                <dt>Product Price</dt>
                <dd><input type="number" value={product.Price} onChange={handlePriceChange}/></dd>
                <dt>City</dt>
                <dd>
                    <select value={product.City} onChange={handleCityChange}>
                        <option >Select City</option>
                        <option >Delhi</option>
                        <option >Hydrabad</option>
                        <option >Mumbai</option>
                        <option >Pune</option>
                    </select>
                    </dd>
                    <dt>Stock</dt>
                    <dd><input type="checkbox" checked={product.Stock} onChange={handleStockChange} /> <label >Available</label></dd>
            </dl>
            <button onClick= {handelSubmitClick} className={btnTheme}>Submit</button>
         
        </div>
        )}
    </div>
    
 )
}