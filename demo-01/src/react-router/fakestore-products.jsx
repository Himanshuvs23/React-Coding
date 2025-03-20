import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function FakestoreProducts(){


    const [products, setProducts] = useState([{id:0, title:'', category:'', price:0, image:'', rating:{rate:0, count:0}, description:''}]);

    let params = useParams();

    useEffect(()=>{
        axios.get(`http://fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
             setProducts(response.data);
        })
    },[])

    return(
        <div>
            <h3>Fakestore Products</h3>
            <div className="d-flex flex-wrap">
                {
                    products.map(product=>
                        <div key={product.id} className="card m-2 p-2" style={{width:'150px'}}>
                            <div className="card-header">
                                <img height="100" src={product.image} className="card-img-top" />
                            </div>
                            <div className="card-footer">
                                <Link to={`/details/${product.id}`} className="btn btn-primary bi bi-eye-fill"> Details</Link>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link to="/">Back to Categories</Link>
        </div>
    )
}