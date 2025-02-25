  import React, { useState , useRef, useEffect } from 'react';
  import axios from 'axios';

export function CarouselDemo() {
    const [product, setProduct ] = useState({id:0, title:'', price:0, description:'', image:'', rating:{rate:0, count:0}, category:''})
    const [status , setStatus]= useState('');

    const thread = useRef(null);
    const productId = useRef(1);
    
    function LoadProduct(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            setProduct(response.data);
        })
    }
    useEffect(()=>{
        LoadProduct(1);
    },[])

    function handlePlayClick(){

        thread.current = setInterval(LoadProductAuto,1000);
        setStatus('Slide Show Playing');
    }


    function handlePauseClick(){
        clearInterval(thread.current);
        setStatus('Show Paused');
    }
    function LoadProductAuto(){
        if(productId.current ===20){
            productId.current = 1;
            LoadProduct(productId.current);
        }else{
        productId.current = productId.current + 1;  
        LoadProduct(productId.current);
    }
    }
 
    function handleBar(e){
        productId.current = Number(e.target.value);
        LoadProduct(productId.current);
    }
    
    function NextClick(){
        if(productId.current ===20){
            productId.current = 1;
            LoadProduct(productId.current);
           }else{
            productId.current = productId.current + 1;
            LoadProduct(productId.current);
           }
       
    }
    
    function PreviousClick(){
     if(productId.current ===1){
    productId.current = 1;
    LoadProduct(productId.current);
    }else{
            productId.current = productId.current - 1;
            LoadProduct(productId.current);
}
  

    }
    return(
        <div className="container-fluid d-flex justify-content-center ">
            <div className="card m-4 p-4 w-50 ">
                <div className="card-header text-center " style={{height:'70px'}}> 
                    {product.title} 
                <div className="fw-bold">{status}</div>
                </div>
                <div className="card-body row ">

                    <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                    <button onClick={PreviousClick} className="btn btn-dark bi bi-chevron-left"></button>
                    </div>

                    <div className="col-10 position-relative" >
                        <div className="position-absolute badge bg-danger p-4 fs-4 text-white rounded rounded-circle end-0">
                        {product.price ? product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }) : ''}
                        
                        </div>

                        <img  height='300' width='200' src={product.image}  alt="" />
                    </div>

                    <div className="col-1 d-flex flex-column align-items-center justify-content-center  " >
                        <button onClick={NextClick} className="btn btn-dark bi bi-chevron-right"></button>
                    </div>

                </div>

                <div className="card-footer text-center " >
                    <input type="range" min={1} max={20} value={productId.current}   onChange={handleBar} />
                    <div className="my-2">
                        <button className="btn btn-primary bi bi-play " onClick={handlePlayClick} >Play</button>
                        <button className="btn btn-danger bi bi-pause  my-2 " onClick={handlePauseClick} >pause</button>
                    </div>
                </div>


            </div>

        </div>
    )

}