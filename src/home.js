import { useSelector } from "react-redux";


function Home(){

    const data = useSelector((a)=>a.SignUp);

    console.log(data)

    return(
        <h1>Home</h1>
    )
}

export default Home;