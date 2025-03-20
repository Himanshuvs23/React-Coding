import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";


export function FakestoreDetails(){


    const [product, setProduct] = useState({id:0, title:'', category:'', price:0, image:'', rating:{rate:0, count:0}, description:''});

    let params = useParams();

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProduct(response.data);
        })

    },[])

    return(
        <div>
            <h3>Product Details</h3>
            <dl className="w-25">
                <img src={product.image} height="200" />
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
            </dl>
            <Link to={`/products/${product.category}`} >Back to Products</Link>
        </div>
    )
}