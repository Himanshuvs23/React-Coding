import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function FakestoreHome(){
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            setCategories(response.data)
        })

    },[])

return (
    <div>
        <h3>Fakestore Home</h3>
        <ul className="list-unstyled">
            {  
            categories.map(category=>
                <li className="my-2 p-2" key={category}>
                    <Link to={`products/${category}`} className="btn btn-dark w-25" >{category.toUpperCase()}</Link>
                    </li>
            )
            }
        </ul>

    </div>
)
}