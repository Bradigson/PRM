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


export const ZonaEAllData = ()=>{
    const [getByName, setGetByName] = useState<Persona[]>([]);
    const [getById, setGetById] = useState({
        id : "",
        nombre:"",
        cedula:"",
        telefono:"",
        colegio_Electoral:"",
        coordinador:""
    });
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');

    const [hideGetByName, setHideByName] = useState('');
    const [hideGetById, setHideById] = useState('');



    const fetchZonaEById = async()=>{
          
        fetch(`https://www.bradigapi.somee.com/api/Zona_E/${id}`, {
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
         setHideByName('d-none');  
         setHideById('');

    //     // fetch(`http://www.bradigapi.somee.com/api/Zona_E/Nombre/${name}`)
    //     // .then(res=> res.json())
    //     // .then(res=> console.log(res))
    //     // .catch(error => console.log('error', error));
    }
    const fetchZonaE  = async ()=>{
        
        try{
            const response = await fetch(`https://www.bradigapi.somee.com/api/Zona_E/Nombre/${nombre}`);
            const data = await response.json();
            setGetByName(data);
            setNombre('');
            setId('');
            setHideById('d-none');
            setHideByName('');  

        }catch(err){
            console.log(err);
        }
    }

    
  
    return(
        <div className='zona-e-all-data'>
            <div className='mt-4 ps-3'>
                <h2>Zona E</h2>
            </div>
            <div className='search-container'>
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
                        />
                    </div>
                </div>
                <div>
                    <div><strong>Cedula</strong></div>
                    <div>
                        <input type="text" className='form-control'/>
                    </div>
                </div>
                <div>
                    <div><strong>Telefono</strong></div>
                    <div>
                        <input type="text" className='form-control'/>
                    </div>
                </div>
                <div>
                    <div><strong>Colegio Electoral</strong></div>
                    <div>
                        <input type="text" className='form-control'/>
                    </div>
                </div>
                <div>
                    <div><strong>Coordinador</strong></div>
                    <div>
                        <input type="text" className='form-control'/>
                    </div>
                </div>
                <div>
                    <div>
                        {
                            id == '' ? <div></div>:<button onClick={fetchZonaEById}>Search</button>
                        }
                        {
                            nombre == '' ? <div></div>:<button onClick={fetchZonaE}>Search</button>
                        }
                        
                       
                    </div>
                </div>
                
            </div>


            <div>
            <div  className="container mt-5">
                                <table className="table table-striped shadow">
                                    <thead className='bg-primary text-light text-center'>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Cedula</th>
                                            <th scope="col">Telefono</th>
                                            <th scope="col">Colegio Electoral</th>
                                            <th scope="col">Cordinador</th>
                                        </tr>
                                    </thead>
                                   {
                                    getById != null ? (
                                        <tr className={`${hideGetById} text-center`}>
                                            <td>{getById.id}</td>
                                            <td>{getById.nombre}</td>
                                            <td>{getById.cedula}</td>
                                            <td>{getById.telefono}</td>
                                            <td>{getById.colegio_Electoral}</td>
                                            <td>{getById.coordinador}</td>
                                        </tr>
                                    ):("")
                                   }
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
                                            </tr>
                                        )
                                    })
                                   }
                                   
                                </table>

                            </div>
               

            </div>
        </div>
    )
}