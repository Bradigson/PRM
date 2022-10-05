import axios from "axios";

const zonaEInsertPerson = async(nombre, cedula, telefono, colegio_Electoral, cordinador, setData)=>{

    var data = JSON.stringify({
        "nombre": `${nombre}`,
        "cedula": `${cedula}`,
        "telefono": `${telefono}`,
        "colegio_Electoral": `${colegio_Electoral}`,
        "cordinador": `${cordinador}`
      });
      
      var config = {
        method: 'post',
        url: 'https://www.api-prm.somee.com/api/Zona_E',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
     .then(function (response) {
            //console.log(JSON.stringify(response.data));
            setData(response.data)
      })
     .catch(function (error) {
            console.log(error);
      });

   
}



export{
    zonaEInsertPerson
}