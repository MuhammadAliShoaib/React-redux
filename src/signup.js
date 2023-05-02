import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "./config/redux/reducer/signupslice";

export default function SignUp() {

    const [model, setModel] = useState();

    let navigate = useNavigate();
    let dispatch = useDispatch();

    let userSignUp = (obj) => {
        dispatch(add(obj))
        navigate('/')
    }


    return (
        <>
            <div>
                <h1>SignUp</h1>
                <input placeholder="Email" onChange={(e) => { setModel({ ...model, email: e.target.value }) }} />
                <input placeholder="password" onChange={(e) => { setModel({ ...model, password: e.target.value }) }} />
                <button onClick={() => { userSignUp(model) }}>SignUp</button>
            </div>
        </>
    )
}