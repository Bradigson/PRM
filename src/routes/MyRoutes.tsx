import { Routes, Route, Navigate } from "react-router-dom";
import { ZonaEOne } from "../components/ZonaE/Zona_E_1";
import { ZonaEAllData } from "../components/ZonaE/Zona_E_by_name";
import { ZonaJ } from "../components/ZonaE/Zona_J";
import { ZonaJOne } from "../components/ZonaE/Zona_J_1";
import { ZonaQ } from "../components/ZonaE/Zona_Q";
import { ZonaQOne } from "../components/ZonaE/Zona_Q_1";
import { ZonaQtwo } from "../components/ZonaE/Zona_Q_2";
import { ZonaR } from "../components/ZonaE/Zona_R";
import { ZonaROne } from "../components/ZonaE/Zona_R_1";
import Home from "../Pages/Home";
const Rutas = ()=>{

    return(
        <Routes>
           <Route path='/' element={<Navigate to='/home/zona-e'/>}/>
            <Route path='home' element={<Home/>}>
                <Route path='zona-e' element={<ZonaEAllData/>}/>
                <Route path='zona-e-1' element={<ZonaEOne/>}/>
                <Route path='zona-j' element={<ZonaJ/>}/>
                <Route path='zona-j-1' element={<ZonaJOne/>}/>
                <Route path='zona-q' element={<ZonaQ/>}/>
                <Route path='zona-q-1' element={<ZonaQOne/>}/>
                <Route path='zona-q-2' element={<ZonaQtwo/>}/>
                <Route path='zona-r' element={<ZonaR/>}/>
                <Route path='zona-r-1' element={<ZonaROne/>}/>
            </Route>
        </Routes>
    )

}

export default Rutas;