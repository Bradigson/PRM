import { NavLink } from "react-router-dom";
const Header = ()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
            <a className="navbar-brand text-light ps-4" href="#">PRM</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ps-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  w-100 d-flex justify-content-between">
                        <li><NavLink className=" nav-link text-light" to="zona-e">Zona E</NavLink></li>
                        <li><NavLink className="nav-link text-light"to="">Zona E-1</NavLink></li>
                        <li><NavLink className="nav-link text-light"to="">Zona J</NavLink></li>
                        <li><NavLink className="nav-link text-light"to="">Zona J-1</NavLink></li>
                        <li><NavLink className="nav-link text-light"to="">Zona Q</NavLink></li>
                        <li><NavLink className="nav-link text-light"to="">Zona Q-1</NavLink></li>
                        <li><NavLink className="nav-link text-light"to="">Zona Q-2</NavLink></li>
                        <li><NavLink className="nav-link text-light"to="">Zona R</NavLink></li>
                        <li><NavLink className="nav-link text-light"to="">Zona R-1</NavLink></li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>

    )
}

export default Header;