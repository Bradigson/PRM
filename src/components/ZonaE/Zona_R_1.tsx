import React from 'react';
import '../../assets/style/Zona_E.scss';
import { useState, useEffect } from 'react';
import internal from 'stream';

interface Persona{
    id : number, 
    nombre : string,
    cedula : string,
    telefono : string,
    colegio_Electoral : string,
    cordinador : string
}


export const ZonaROne = ()=>{
    //state
    const [getByName, setGetByName] = useState<Persona[]>([]);
    const [getById, setGetById] = useState({
        id : "",
        nombre:"",
        cedula:"",
        telefono:"",
        colegio_Electoral:"",
        coordinador:""
    });
    const [getByCedula, setGetByCedula] = useState<Persona[]>([]);
    const [getByTelefono, setGetByTelefono] = useState<Persona[]>([]);
    const [getByColegioElectoral, setGetByColegioElectoral] = useState<Persona[]>([]);
    const [getByCoordinador, setGetByCoordinador] = useState<Persona[]>([]);

    //input value
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [cedula, setCedula] = useState('');
    const [telefono, setTelefono] = useState('');
    const [colegioElectoral, setColegioElectoral] = useState('');
    const [coordinador, setCoordinador] = useState('');

    //class
    const [hideGetByName, setHideByName] = useState('');
    const [hideGetById, setHideById] = useState('');
    const [hideGetByCedula, setHideByCedula] = useState('');
    const [hideGetByTelefono, setHideByTelefono] = useState('');
    const [hideGetByColegioElectoral, setHideByColegioElectoral] = useState('');
    const [hideGetByCoordinador, setHideByCoordinador] = useState('');
    const [hideButton, setHideButton] = useState('d-none');



    //by id
    const fetchZonaEById = async()=>{
          
        fetch(`https://www.api-prm.somee.com/api/Zona_R_1/${id}`, {
        method: "GET",
        })
        .then(response => response.json()) 
        .then(data=> setGetById({...getById, id:data.id, 
            nombre : data.nombre,
            cedula : data.cedula,
            telefono : data.telefono,
            colegio_Electoral : data.colegio_Electoral,
            coordinador : data.cordinador
        }))
        .catch(err => console.log(err));
        
         setId('');
         setHideById('');
         setHideByName('d-none');  
         setHideByCedula('d-none');
         setHideByTelefono('d-none');
         setHideByColegioElectoral('d-none');
         setHideByCoordinador('d-none');
         setHideButton('');
    
    }

    //by nombre
    const fetchZonaE  = async ()=>{
        
        try{
            const response = await fetch(`https://www.api-prm.somee.com/api/Zona_R_1/Nombre/${nombre}`);
            const data = await response.json();
            setGetByName(data);
            setNombre('');
            setId('');

            setHideById('d-none');
            setHideByName('');  
            setHideByCedula('d-none');
            setHideByTelefono('d-none');
            setHideByColegioElectoral('d-none');
            setHideByCoordinador('d-none');
            setHideButton('');


        }catch(err){
            console.log(err);
        }
    }

    
    //by cedula
    const getZonaEByCedula = async()=>{
        cedula == '' ? console.log("Cedula file is empty") : (
        fetch(`https://www.api-prm.somee.com/api/Zona_R_1/Cedula/${cedula}`)
        .then(res=> res.json())
        .then(data=> setGetByCedula(data))
        .catch(error => console.log('error', error))
        );
        
        setCedula('');
        setHideById('d-none');
        setHideByName('d-none');  
        setHideByCedula('');
        setHideByTelefono('d-none');
        setHideByColegioElectoral('d-none');
        setHideByCoordinador('d-none');
        setHideButton('');


    }

    //by telefono
    const getZonaEByTelefono = async()=>{
        telefono == '' ? console.log("Cedula file is empty") : (
        fetch(`https://www.api-prm.somee.com/api/Zona_R_1/Telefono/${telefono}`)
        .then(res=> res.json())
        .then(data=> setGetByTelefono(data))
        .catch(error => console.log('error', error))
        );

        setTelefono('');
        setHideById('d-none');
        setHideByName('d-none');  
        setHideByCedula('d-none');
        setHideByTelefono('');
        setHideByColegioElectoral('d-none');
        setHideByCoordinador('d-none');
        setHideButton('');


    }

    //by Colegio Electoral
    const getZonaEByColegioElectoral = async()=>{
        colegioElectoral == '' ? console.log("Cedula file is empty") : (
        fetch(`https://www.api-prm.somee.com/api/Zona_R_1/Colegio_Electoral/${colegioElectoral}`)
        .then(res=> res.json())
        .then(data=> setGetByColegioElectoral(data))
        .catch(error => console.log('error', error))
        );

        setColegioElectoral('');
        setHideById('d-none');
        setHideByName('d-none');  
        setHideByCedula('d-none');
        setHideByTelefono('d-none');
        setHideByColegioElectoral('');
        setHideByCoordinador('d-none');
        setHideButton('');


    }



    //by Coordinador
    const getZonaEByCoordinador = async()=>{
        coordinador == '' ? console.log("Cedula file is empty") : (
        fetch(`https://www.api-prm.somee.com/api/Zona_R_1/Cordinador/${coordinador}`)
        .then(res=> res.json())
        .then(data=> setGetByCoordinador(data))
        .catch(error => console.log('error', error))
        );
        
        setCoordinador('');
        setHideById('d-none');
        setHideByName('d-none');  
        setHideByCedula('d-none');
        setHideByTelefono('d-none');
        setHideByColegioElectoral('d-none');
        setHideByCoordinador('');
        setHideButton('');

    }
  

    //clear
    const clearId = ()=>{
      setNombre('');
      setCedula('');
      setTelefono('');
      setColegioElectoral('');
      setCoordinador('');
    }

    const clearNombre = ()=>{
        setId('');
        setCedula('');
        setTelefono('');
        setColegioElectoral('');
        setCoordinador('');
      }

      const clearCedula = ()=>{
        setId('');
        setNombre('');
        setTelefono('');
        setColegioElectoral('');
        setCoordinador('');
      }

      const clearTelefono = ()=>{
        setId('');
        setNombre('');
        setCedula('');
        setColegioElectoral('');
        setCoordinador('');
      }

      const clearColegio = ()=>{
        setId('');
        setNombre('');
        setCedula('');
        setTelefono('');
        setCoordinador('');
      }

      const clearCoordinador = ()=>{
        setId('');
        setNombre('');
        setCedula('');
        setTelefono('');
        setColegioElectoral('');
      }

    
    return(
        <div className='zona-e-all-data pb-4'>
            <div className='mt-4 ps-3'>
                <h2>Zona E</h2>
            </div>
            <div className='search-container p-5 shadow'>
                <div>
                    <div><strong>Id</strong></div>
                    <div>
                        <input
                            type='number'
                            className='form-control'
                            name='id'
                            placeholder='Id...'
                            value={id}
                            onChange={(e)=> setId(e.target.value)}
                            onClick={clearId}
                        />
                    </div>
                </div>
                <div>
                    <div><strong>Nombre</strong></div>
                    <div>
                        <input
                            type='text'
                            className='form-control'
                            name='nombre'
                            placeholder='Nombre'
                            value={nombre}
                            onChange={(e)=>setNombre(e.target.value)}
                            onClick={clearNombre}
                        />
                    </div>
                </div>
                <div>
                    <div><strong>Cedula</strong></div>
                    <div>
                        <input
                            type='text'
                            className='form-control'
                            name='cedula'
                            placeholder='cedula'
                            value={cedula}
                            onChange={(e)=>setCedula(e.target.value)}
                            onClick={clearCedula}
                        />
                    </div>
                </div>
                <div>
                    <div><strong>Telefono</strong></div>
                    <div>
                        <input
                            type='text'
                            className='form-control'
                            name='telefono'
                            placeholder='telefono'
                            value={telefono}
                            onChange={(e)=> setTelefono(e.target.value)}
                            onClick={clearTelefono}
                        />
                    </div>
                </div>
                <div>
                    <div><strong>Colegio Electoral</strong></div>
                    <div>
                        <input
                            type='text'
                            className='form-control'
                            name='colegioElectoral'
                            placeholder='Colegio Electoral'
                            value={colegioElectoral}
                            onChange={(e)=> setColegioElectoral(e.target.value)}
                            onClick={clearColegio}
                        />
                    </div>
                </div>
                <div>
                    <div><strong>Coordinador</strong></div>
                    <div>
                        <input
                                type='text'
                                className='form-control'
                                name='coordinador'
                                placeholder='Coordinador'
                                value={coordinador}
                                onChange={(e)=> setCoordinador(e.target.value)}
                                onClick={clearCoordinador}
                        />
                    </div>
                </div>
                
                
            </div>
            <div className='text-center  p-2 button-search'>
                    <div>
                        {
                            id == '' ? <div></div>:<button onClick={fetchZonaEById} className="btn-search shadow">Search</button>
                        }
                        {
                            nombre == '' ? <div></div>:<button onClick={fetchZonaE} className="btn-search shadow">Search</button>
                        }
                        {
                            cedula == '' ? <div></div>:<button onClick={getZonaEByCedula} className="btn-search shadow">Search</button>
                        }
                        {
                            telefono == '' ? <div></div>:<button onClick={getZonaEByTelefono} className="btn-search shadow">Search</button>
                        }
                        {
                            colegioElectoral == '' ? <div></div>:<button onClick={getZonaEByColegioElectoral} className="btn-search shadow">Search</button>
                        }
                        {
                            coordinador == '' ? <div></div>:<button onClick={getZonaEByCoordinador} className="btn-search shadow">Search</button>
                        }
                    </div>
            </div>

            <div className=''>
                    <div  className="container mt-5">

                        <table className="table table-striped table-hover shadow">
                            <thead className='bg-primary text-light text-center'>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Cedula</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col">Colegio Electoral</th>
                                    <th scope="col">Cordinador</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                 {/* by id */}
                            {
                            getById != null ? (
                                <tr className={`${hideGetById} text-center`}>
                                    <td>{getById.id}</td>
                                    <td>{getById.nombre}</td>
                                    <td>{getById.cedula}</td>
                                    <td>{getById.telefono}</td>
                                    <td>{getById.colegio_Electoral}</td>
                                    <td>{getById.coordinador}</td>
                                    <th><button className={`${hideButton} btn btn-danger shadow`}><i className='bx bx-trash'></i></button></th>
                                    <th><button className={`${hideButton} btn btn-warning text-dark shadow`}><i className='bx bx-edit'></i></button></th>
                                </tr>
                            ):("")
                            }

                            {/* by name */}
                            {
                            getByName.map(data=>{
                                    return(
                                        <tr key={data.id} className={`${hideGetByName} text-center`}>
                                            <td>{data.id}</td>
                                            <td>{data.nombre}</td>
                                            <td>{data.cedula}</td>
                                            <td>{data.telefono}</td>
                                            <td>{data.colegio_Electoral}</td>
                                            <td>{data.cordinador}</td>
                                            <th><button className={`${hideButton} btn btn-danger shadow`}><i className='bx bx-trash'></i></button></th>
                                            <th><button className={`${hideButton} btn btn-warning text-dark shadow`}><i className='bx bx-edit'></i></button></th>
                                        </tr>
                                    )
                                })
                            }

                            {/* by cedula */}
                            {
                            getByCedula.map(data=>{
                                return(
                                    <tr key={data.id} className={`${hideGetByCedula} text-center`}>
                                        <td>{data.id}</td>
                                        <td>{data.nombre}</td>
                                        <td>{data.cedula}</td>
                                        <td>{data.telefono}</td>
                                        <td>{data.colegio_Electoral}</td>
                                        <td>{data.cordinador}</td>
                                        <th><button className={`${hideButton} btn btn-danger shadow`}><i className='bx bx-trash'></i></button></th>
                                        <th><button className={`${hideButton} btn btn-warning text-dark shadow`}><i className='bx bx-edit'></i></button></th>
                                    </tr>
                                )
                            })
                            }

                            {/* by telefono */}
                            {
                                getByTelefono.map(data=>{
                                    return(
                                        <tr key={data.id} className={`${hideGetByTelefono} text-center`}>
                                            <td>{data.id}</td>
                                            <td>{data.nombre}</td>
                                            <td>{data.cedula}</td>
                                            <td>{data.telefono}</td>
                                            <td>{data.colegio_Electoral}</td>
                                            <td>{data.cordinador}</td>
                                            <th><button className={`${hideButton} btn btn-danger shadow`}><i className='bx bx-trash'></i></button></th>
                                            <th><button className={`${hideButton} btn btn-warning text-dark shadow`}><i className='bx bx-edit'></i></button></th>
                                        </tr>
                                    )
                                })
                            }


                            {/* by Colegio Electoral */}
                            {
                                getByColegioElectoral.map(data=>{
                                    return(
                                        <tr key={data.id} className={`${hideGetByColegioElectoral} text-center`}>
                                            <td>{data.id}</td>
                                            <td>{data.nombre}</td>
                                            <td>{data.cedula}</td>
                                            <td>{data.telefono}</td>
                                            <td>{data.colegio_Electoral}</td>
                                            <td>{data.cordinador}</td>
                                            <th><button className={`${hideButton} btn btn-danger shadow`}><i className='bx bx-trash'></i></button></th>
                                            <th><button className={`${hideButton} btn btn-warning text-dark shadow`}><i className='bx bx-edit'></i></button></th>
                                        </tr>
                                    )
                                })
                            }

                                  {/* by Coordinador */}
                                {
                                    getByCoordinador.map(data=>{
                                        return(
                                            <tr key={data.id} className={`${hideGetByCoordinador} text-center`}>
                                                <td>{data.id}</td>
                                                <td>{data.nombre}</td>
                                                <td>{data.cedula}</td>
                                                <td>{data.telefono}</td>
                                                <td>{data.colegio_Electoral}</td>
                                                <td>{data.cordinador}</td>
                                                <th><button className={`${hideButton} btn btn-danger shadow`}><i className='bx bx-trash'></i></button></th>
                                                <th><button className={`${hideButton} btn btn-warning text-dark shadow`}><i className='bx bx-edit'></i></button></th>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                         </table>
                    </div>
            </div>
        </div>
    )
}