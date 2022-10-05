import { NavLink } from "react-router-dom";
import '.././assets/style/Header.scss';
import { useState } from "react";
const Header = ()=>{


    const [zonaE,  setZonaE  ] = useState<Boolean>(true);
    const [ZonaE1, setZonaE1 ] = useState<Boolean>(true);
    const [zonaJ,  setZonaJ  ] = useState<Boolean>(true);
    const [ZonaJ1, setZonaJ1 ] = useState<Boolean>(true);
    const [zonaQ,  setZonaQ  ] = useState<Boolean>(true);
    const [zonaQ1, setZonaQ1 ] = useState<Boolean>(true);
    const [zonaQ2, setZonaQ2 ] = useState<Boolean>(true);
    const [zonaR,  setZonaR  ] = useState<Boolean>(true);
    const [zonaR1, setZonaR1 ] = useState<Boolean>(true);

    const functionZonaE = ()=>{
        setZonaE(!zonaE);
        setZonaE1(true);
        setZonaJ(true);
        setZonaJ1(true);
        setZonaQ(true); 
        setZonaQ1(true);
        setZonaQ2(true);
        setZonaR(true); 
        setZonaR1(true);
    }

    const functionZonaE1 = ()=>{
        setZonaE1(!ZonaE1);

        setZonaE(true);
        setZonaJ(true);
        setZonaJ1(true);
        setZonaQ(true); 
        setZonaQ1(true);
        setZonaQ2(true);
        setZonaR(true); 
        setZonaR1(true);
    }

    const functionZonaJ = ()=>{
        setZonaJ(!zonaJ);

        setZonaE1(true);
        setZonaE(true);
        setZonaJ1(true);
        setZonaQ(true); 
        setZonaQ1(true);
        setZonaQ2(true);
        setZonaR(true); 
        setZonaR1(true);
    }
    const functionZonaJ1 = ()=>{
        setZonaJ1(!ZonaJ1);

        setZonaJ(true);
        setZonaE1(true);
        setZonaE(true);
        setZonaQ(true); 
        setZonaQ1(true);
        setZonaQ2(true);
        setZonaR(true); 
        setZonaR1(true);
    }
    const functionZonaQ = ()=>{
        setZonaQ(!zonaQ);

        setZonaJ1(true);
        setZonaJ(true);
        setZonaE1(true);
        setZonaE(true);
        setZonaQ1(true);
        setZonaQ2(true);
        setZonaR(true); 
        setZonaR1(true);
    }
    const functionZonaQ1 = ()=>{
        setZonaQ1(!zonaQ1);

        setZonaQ(true);
        setZonaJ1(true);
        setZonaJ(true);
        setZonaE1(true);
        setZonaE(true);
        setZonaQ2(true);
        setZonaR(true); 
        setZonaR1(true);
    }
    const functionZonaQ2 = ()=>{
        setZonaQ2(!zonaQ2);

        setZonaQ1(true);
        setZonaQ(true);
        setZonaJ1(true);
        setZonaJ(true);
        setZonaE1(true);
        setZonaE(true);
        setZonaR(true); 
        setZonaR1(true);
    }
    const functionZonaR = ()=>{
        setZonaR(!zonaR);

        setZonaQ2(true);
        setZonaQ1(true);
        setZonaQ(true);
        setZonaJ1(true);
        setZonaJ(true);
        setZonaE1(true);
        setZonaE(true);
        setZonaR1(true);
    }
    const functionZonaR1 = ()=>{
        setZonaR1(!zonaR1);

        setZonaR(true);
        setZonaQ2(true);
        setZonaQ1(true);
        setZonaQ(true);
        setZonaJ1(true);
        setZonaJ(true);
        setZonaE1(true);
        setZonaE(true);
    }
    return(
        <nav className="navbar navbar-expand-lg bg-primary fixed-top">
           
            <div className="container-fluid">
            <a className="navbar-brand text-light ps-4" href="/">PRM</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ps-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  w-75 d-flex justify-content-between">
                        <li><NavLink className={`${zonaE ? "" : "active-class" }  nav-link text-light`} onClick={functionZonaE} to="zona-e" >Zona E</NavLink></li>
                        <li><NavLink className={`${ZonaE1 ? "" : "active-class" }  nav-link text-light`} onClick={functionZonaE1} to="zona-e-1">Zona E-1</NavLink></li>
                        <li><NavLink className={`${zonaJ ? "" : "active-class" }  nav-link text-light`} onClick={functionZonaJ} to="zona-j">Zona J</NavLink></li>
                        <li><NavLink className={`${ZonaJ1 ? "" : "active-class" }  nav-link text-light`} onClick={functionZonaJ1} to="zona-j-1">Zona J-1</NavLink></li>
                        <li><NavLink className={`${zonaQ ? "" : "active-class" }  nav-link text-light`} onClick={functionZonaQ} to="zona-q">Zona Q</NavLink></li>
                        <li><NavLink className={`${zonaQ1 ? "" : "active-class" }  nav-link text-light`} onClick={functionZonaQ1} to="zona-q-1">Zona Q-1</NavLink></li>
                        <li><NavLink className={`${zonaQ2 ? "" : "active-class" }  nav-link text-light`} onClick={functionZonaQ2} to="zona-q-2">Zona Q-2</NavLink></li>
                        <li><NavLink className={`${zonaR ? "" : "active-class" }  nav-link text-light`} onClick={functionZonaR} to="zona-r">Zona R</NavLink></li>
                        <li><NavLink className={`${zonaR1 ? "" : "active-class" }  nav-link text-light`} onClick={functionZonaR1} to="zona-r-1">Zona R-1</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header;