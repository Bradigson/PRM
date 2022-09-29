import { Routes, Route, Navigate } from "react-router-dom";
import { ZonaEAllData } from "../components/ZonaE/Zona_E_by_name";
import Home from "../Pages/Home";
const Rutas = ()=>{

    return(
        <Routes>
           <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='home' element={<Home/>}>
                <Route path='zona-e' element={<ZonaEAllData/>}/>
            </Route>
        </Routes>
    )

}

export default Rutas;