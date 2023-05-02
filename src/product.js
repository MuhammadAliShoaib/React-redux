import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "./config/redux/reducer/cartslice";

function Product() {

    let api = "https://fakestoreapi.com/products";


    const [product, setProduct] = useState([]);
    const [model,setModel] = useState({})


    let navigate = useNavigate();
    let dispatch = useDispatch();


    let getData = () => {
        axios.get(api)
            .then((res) => {
                setProduct([...res.data])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    let moveTo = () => {
        navigate('/cart');
    }


    return (
        <>
            <h1>Products</h1>
            <button onClick={() => { moveTo() }}>Cart Screen</button>
            {product.map((x, i) => (
                <div key={i} >
                    <img src={x.image} width="300px" />
                    <p>{x.title}</p>
                    <button onClick={()=>{dispatch(add(x))
                    }}>Add to cart</button>
                </div>
            ))}
        </>
    )

}

export default Product;