import { useDispatch, useSelector } from "react-redux";
import { del } from "./config/redux/reducer/cartslice";

function Cart() {
    const data = useSelector((a) => a.Cart);

    let dispatch = useDispatch();
    
    
    return (
        <>
        <h1>Cart Screen</h1>
        {
            data.map((x,i)=>(
                <div key={i} >
                    <img src={x.image} width="300px" />
                    <p>{x.title}</p>
                    <button onClick={()=>{dispatch(del(x))}}>Delete</button>
                </div>
            ))
        }
        </>
    )
}

export default Cart;