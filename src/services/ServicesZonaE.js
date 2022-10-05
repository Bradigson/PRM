import axios from "axios";

const zonaEServiceById = async(state, id, setLoading)=>{
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
    setLoading(false);

}


const zonaEServiceByName = async(state, nombre, setLoading)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E/Nombre/${nombre}`);
    state(getData.data);
    setLoading(false);

}

const zonaEServiceByCedula = async(state, cedula, setLoading)=>{
    const getdata = await axios.get(`https://www.api-prm.somee.com/api/Zona_E/Cedula/${cedula}`);
    state(getdata.data);
    setLoading(false);

}

const zonaEServiceByTelefono = async (state, telefono, setLoading)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E/Telefono/${telefono}`);
    state(getData.data);
    setLoading(false);

}

const zonaEServiceByColegioElectoral = async (state, colegioElectoral, setLoading)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E/Colegio_Electoral/${colegioElectoral}`);
    state(getData.data);
    setLoading(false);

}

const zonaEServiceByCoordinador = async(state, coordinador, setLoading)=>{
    const getData = await axios.get(`https://www.api-prm.somee.com/api/Zona_E/Cordinador/${coordinador}`);
    state(getData.data);
    setLoading(false);

}
export{
    zonaEServiceById, 
    zonaEServiceByName,
    zonaEServiceByCedula,
    zonaEServiceByTelefono,
    zonaEServiceByColegioElectoral,
    zonaEServiceByCoordinador
}