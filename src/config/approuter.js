import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "../login";
import Home from "../home";
import SignUp from "../signup";
import Product from "../product";
import Cart from "../cart";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default AppRouter;