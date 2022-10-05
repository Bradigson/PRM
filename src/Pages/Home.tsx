import { Outlet } from "react-router-dom";
import Header from "./Header";


const Home = ()=>{
    return(
        <div className="home">
            <Header/>
            

                <div className="container-fluid">
                    <Outlet/>
                </div>

        </div>
    )
}


export default Home;