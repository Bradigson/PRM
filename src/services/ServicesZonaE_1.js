import axios from "axios";


const zonaE1ServiceById = async (state, id, setLoading)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E_1/${id}`);
    state({
        id : getData.data.id, 
        nombre : getData.data.nombre,
        cedula : getData.data.cedula,
        telefono : getData.data.telefono,
        colegio_Electoral :getData.data.colegio_Electoral,
        coordinador : getData.data.coordinador,
        loading : false
    });
    setLoading(false);

}

const zonaE1ServiceByName = async(state, nombre, setLoading)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E_1/Nombre/${nombre}`);
    state(getData.data);
    setLoading(false);
}


const zonaE1ServiceByCedula = async(state, cedula, setLoading)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E_1/Cedula/${cedula}`);
    state(getData.data);
    setLoading(false);
}

const zonaE1ServiceByTelefono = async(state, telefono, setLoading)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E_1/Telefono/${telefono}`);
    state(getData.data);
    setLoading(false);
}

const zonaE1ServiceByColegioElectoral = async(state, colegioElectoral, setLoading)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E_1/Colegio_Electoral/${colegioElectoral}`);
    state(getData.data);
    setLoading(false);
}

const zonaE1ServiceByCoordinador = async(state, coordinador, setLoading)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E_1/Cordinador/${coordinador}`);
    state(getData.data);
    setLoading(false);
}



export {
    zonaE1ServiceById,
    zonaE1ServiceByName,
    zonaE1ServiceByCedula,
    zonaE1ServiceByTelefono, 
    zonaE1ServiceByColegioElectoral,
    zonaE1ServiceByCoordinador
}