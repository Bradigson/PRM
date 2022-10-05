import { useState } from "react";
import {zonaE1InsertPerson} from '../../services/ServicePopUp';



interface messageResponse{
    id : number, 
    statusError : string,
    errorMessage : string
}

export const ZonaE1Popup = ()=>{

    const [nombre, setNombre]=useState<string>('');
    const [cedula, setCedula]=useState<string>('');
    const [telefono, setTelefono]=useState<string>('');
    const [colegioElectoral, setColegioElectoral]=useState<string>('');
    const [coordinador, setCoordinador]=useState<string>('');
    const [data, setData] = useState<messageResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [isEmptyName, setIsEmptyName] = useState<string>('');
    const [isEmptyCedula, setIsEmptyCedula] = useState<string>('');
    const [isEmptyTelefono, setIsEmptyTelefono] = useState<string>('');
    const [isEmptyColegioElectoral, setIsEmptyColegioElectoral] = useState<string>('');
    const [isEmptyCoordinador, setIsEmptyCoordinador] = useState<string>('');

    const handleNombre = (e : any)=>{
        setNombre(e.target.value);
    }
    const handleCedula = (e : any)=>{
        setCedula(e.target.value);
    }
    const handleTelefono = (e : any)=>{
        setTelefono(e.target.value);
    }
    const handleColegioElectoral = (e : any)=>{
        setColegioElectoral(e.target.value);
    }
    const handleCoordinador = (e : any)=>{
        setCoordinador(e.target.value);
    }

    const handleSubmit = async (e : any)=>{
        e.preventDefault();
        if(nombre == ""){
            setIsEmptyName('Campo nombre vacio');
        }else if(cedula == "")
        {
            setIsEmptyCedula('Campo cedula vacio');
            setIsEmptyName('');
        }
        else if(telefono == "")
        {
            setIsEmptyTelefono('Campo telefono vacio');
            setIsEmptyCedula('');
        }
        else if(colegioElectoral == "")
        {
            setIsEmptyColegioElectoral('Cmapo colegio electoral vacio');
            setIsEmptyTelefono('');
        }
        else if(coordinador == "")
        {
            setIsEmptyCoordinador('Campo coordinador vacio');
            setIsEmptyColegioElectoral('');
        }
        else{
            setLoading(true);
            await zonaE1InsertPerson(nombre, cedula, telefono, colegioElectoral, coordinador, setData, setLoading);

        }
        

    }


    const handleClose = ()=>{
        setNombre('');
        setCedula('');
        setTelefono('');
        setColegioElectoral('');
        setCoordinador('');
        setData([]);
        setIsEmptyName('');
        setIsEmptyName('');
        setIsEmptyCedula('');
        setIsEmptyTelefono('');
        setIsEmptyColegioElectoral('');
        setIsEmptyCoordinador('');
    }
    console.log(data);
        return(
            <div className="mt-4">
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
                    <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Zona E-1</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                        onClick={handleClose}></button>
                                    </div>
                                    <div className="modal-body">

                                        <form className="row g-3" onSubmit={handleSubmit}>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Nombre..." name="nombre" value={nombre} onChange={handleNombre}/>
                                                <div className="text-danger">{isEmptyName}</div>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control"  placeholder="Cedula..." name="cedula" value={cedula} onChange={handleCedula}/>
                                                <div className="text-danger">{isEmptyCedula}</div>
                                            </div>

                                            <div className="col-md-6">
                                                <input type="text" className="form-control"  placeholder="Telefono..." name="telefono" value={telefono} onChange={handleTelefono}/>
                                                <div className="text-danger">{isEmptyTelefono}</div>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Colegio Electoral" name="colegion electoral" value={colegioElectoral} onChange={handleColegioElectoral}/>
                                                <div className="text-danger">{isEmptyColegioElectoral}</div>
                                            </div>
                                            <div className="col-12">
                                                <input type="text" className="form-control" placeholder="Coordinador..." name="coordinador" value={coordinador} onChange={handleCoordinador}/>
                                                <div className="text-danger">{isEmptyCoordinador}</div>
                                            </div>

                                            <div className="col-12">
                                                <button type="submit" className="btn btn-success">{loading ? ("cargando"):("Create")}</button>

                                                
                                            </div>
                                            
                                        </form>

                                    </div>
                                    <div className="modal-footer d-flex justify-content-center">
                                            {
                                                data.map(response=>{
                                                    return(
                                                        <div key={response.id}>
                                                            {response.errorMessage} !
                                                        </div>
                                                    )
                                                })
                                            }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" 
                    aria-labelledby="exampleModalToggleLabel2" >
                </div>

                <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" 
                role="button">Agregar Persona</a>
                
            </div>
        )
}