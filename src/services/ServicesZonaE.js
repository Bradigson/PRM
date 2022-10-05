import axios from "axios";

const zonaEServiceById = async(state, id)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E/${id}`);
    state({
        id : getData.data.id, 
        nombre : getData.data.nombre,
        cedula : getData.data.cedula,
        telefono : getData.data.telefono,
        colegio_Electoral :getData.data.colegio_Electoral,
        coordinador : getData.data.coordinador,
        loading : false
    });

}


const zonaEServiceByName = async(state, nombre)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E/Nombre/${nombre}`);
    state(getData.data)
}

const zonaEServiceByCedula = async(state, cedula)=>{
    const getdata = await axios.get(`https://www.api-prm.somee.com/api/Zona_E/Cedula/${cedula}`);
    state(getdata.data);
}

const zonaEServiceByTelefono = async (state, telefono)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E/Telefono/${telefono}`);
    state(getData.data);
}

const zonaEServiceByColegioElectoral = async (state, colegioElectoral)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E/Colegio_Electoral/${colegioElectoral}`);
    state(getData.data);
}

const zonaEServiceByCoordinador = async(state, coordinador)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E/Cordinador/${coordinador}`);
    state(getData.data);
}
export{
    zonaEServiceById, 
    zonaEServiceByName,
    zonaEServiceByCedula,
    zonaEServiceByTelefono,
    zonaEServiceByColegioElectoral,
    zonaEServiceByCoordinador
}