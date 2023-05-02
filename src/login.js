import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { add } from "./config/redux/reducer/loginslice";

export default function Login() {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    let loginUser = ()=>{
        let obj={
            email:"abc@gmail.com",
            password:"123456"
        };
        dispatch(add(obj))
        navigate('/')   
    }

    return (
        <>
        <div>
            <h1>Login</h1>
            <button onClick={loginUser}>Login User</button>
        </div>
        </>
    )
}