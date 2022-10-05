import { useState } from "react";
import {zonaEInsertPerson} from '../../services/ServicePopUp';



interface messageResponse{
    id : number, 
    statusError : string,
    errorMessage : string
}

export const ZonaEPopup = ()=>{

    const [nombre, setNombre]=useState<string>('');
    const [cedula, setCedula]=useState<string>('');
    const [telefono, setTelefono]=useState<string>('');
    const [colegioElectoral, setColegioElectoral]=useState<string>('');
    const [coordinador, setCoordinador]=useState<string>('');
    const [data, setData] = useState<messageResponse[]>([]);

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
        await zonaEInsertPerson(nombre, cedula, telefono, colegioElectoral, coordinador, setData);

    }


    const handleClose = ()=>{
        setNombre('');
        setCedula('');
        setTelefono('');
        setColegioElectoral('');
        setCoordinador('');
    }
    console.log(data);
        return(
            <div className="mt-4">
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
                    <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Zona E</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                        onClick={handleClose}></button>
                                    </div>
                                    <div className="modal-body">

                                        <form className="row g-3" onSubmit={handleSubmit}>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Nombre..." name="nombre" value={nombre} onChange={handleNombre}/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control"  placeholder="Cedula..." name="cedula" value={cedula} onChange={handleCedula}/>
                                            </div>

                                            <div className="col-md-6">
                                                <input type="text" className="form-control"  placeholder="Telefono..." name="telefono" value={telefono} onChange={handleTelefono}/>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Colegio Electoral" name="colegion electoral" value={colegioElectoral} onChange={handleColegioElectoral}/>
                                            </div>
                                            <div className="col-12">
                                                <input type="text" className="form-control" placeholder="Coordinador..." name="coordinador" value={coordinador} onChange={handleCoordinador}/>
                                            </div>

                                            <div className="col-12">
                                                <button type="submit" className="btn btn-success">Crear</button>

                                                
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