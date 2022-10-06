import axios from "axios";


//Zona E
const zonaEInsertPerson = async(nombre, cedula, telefono, colegio_Electoral, cordinador, setData, setLoading)=>{

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
            setData(response.data);
            setLoading(false);
      })
     .catch(function (error) {
            console.log(error);
            setLoading(false);

      });
}


//Zona  E-1
const zonaE1InsertPerson = async(nombre, cedula, telefono, colegio_Electoral, cordinador, setData, setLoading)=>{

    var data = JSON.stringify({
        "nombre": `${nombre}`,
        "cedula": `${cedula}`,
        "telefono": `${telefono}`,
        "colegio_Electoral": `${colegio_Electoral}`,
        "cordinador": `${cordinador}`
      });
      
      var config = {
        method: 'post',
        url: 'https://www.api-prm.somee.com/api/Zona_E_1',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
     .then(function (response) {
            //console.log(JSON.stringify(response.data));
            setData(response.data);
            setLoading(false);
      })
     .catch(function (error) {
            console.log(error);
            setLoading(false);

      });
}










//zona J
const zonaJInsertPerson = async(nombre, cedula, telefono, colegio_Electoral, cordinador, setData, setLoading)=>{

  var data = JSON.stringify({
      "nombre": `${nombre}`,
      "cedula": `${cedula}`,
      "telefono": `${telefono}`,
      "colegio_Electoral": `${colegio_Electoral}`,
      "cordinador": `${cordinador}`
    });
    
    var config = {
      method: 'post',
      url: 'https://www.api-prm.somee.com/api/Zona_J',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
   .then(function (response) {
          //console.log(JSON.stringify(response.data));
          setData(response.data);
          setLoading(false);
    })
   .catch(function (error) {
          console.log(error);
          setLoading(false);

    });
}



//Zona J-1



const zonaJ1InsertPerson = async(nombre, cedula, telefono, colegio_Electoral, cordinador, setData, setLoading)=>{

  var data = JSON.stringify({
      "nombre": `${nombre}`,
      "cedula": `${cedula}`,
      "telefono": `${telefono}`,
      "colegio_Electoral": `${colegio_Electoral}`,
      "cordinador": `${cordinador}`
    });
    
    var config = {
      method: 'post',
      url: 'https://www.api-prm.somee.com/api/Zona_J_1',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
   .then(function (response) {
          //console.log(JSON.stringify(response.data));
          setData(response.data);
          setLoading(false);
    })
   .catch(function (error) {
          console.log(error);
          setLoading(false);

    });
}


//Zona Q

const zonaQInsertPerson = async(nombre, cedula, telefono, colegio_Electoral, cordinador, setData, setLoading)=>{

  var data = JSON.stringify({
      "nombre": `${nombre}`,
      "cedula": `${cedula}`,
      "telefono": `${telefono}`,
      "colegio_Electoral": `${colegio_Electoral}`,
      "cordinador": `${cordinador}`
    });
    
    var config = {
      method: 'post',
      url: 'https://www.api-prm.somee.com/api/Zona_Q',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
   .then(function (response) {
          //console.log(JSON.stringify(response.data));
          setData(response.data);
          setLoading(false);
    })
   .catch(function (error) {
          console.log(error);
          setLoading(false);

    });
}



//Zona Q 1

const zonaQ1InsertPerson = async(nombre, cedula, telefono, colegio_Electoral, cordinador, setData, setLoading)=>{

  var data = JSON.stringify({
      "nombre": `${nombre}`,
      "cedula": `${cedula}`,
      "telefono": `${telefono}`,
      "colegio_Electoral": `${colegio_Electoral}`,
      "cordinador": `${cordinador}`
    });
    
    var config = {
      method: 'post',
      url: 'https://www.api-prm.somee.com/api/Zona_Q_1',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
   .then(function (response) {
          //console.log(JSON.stringify(response.data));
          setData(response.data);
          setLoading(false);
    })
   .catch(function (error) {
          console.log(error);
          setLoading(false);

    });
}


//Zona Q 2

const zonaQ2InsertPerson = async(nombre, cedula, telefono, colegio_Electoral, cordinador, setData, setLoading)=>{

  var data = JSON.stringify({
      "nombre": `${nombre}`,
      "cedula": `${cedula}`,
      "telefono": `${telefono}`,
      "colegio_Electoral": `${colegio_Electoral}`,
      "cordinador": `${cordinador}`
    });
    
    var config = {
      method: 'post',
      url: 'https://www.api-prm.somee.com/api/Zona_Q_2',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
   .then(function (response) {
          //console.log(JSON.stringify(response.data));
          setData(response.data);
          setLoading(false);
    })
   .catch(function (error) {
          console.log(error);
          setLoading(false);

    });
}

//Zona R


const zonaRInsertPerson = async(nombre, cedula, telefono, colegio_Electoral, cordinador, setData, setLoading)=>{

  var data = JSON.stringify({
      "nombre": `${nombre}`,
      "cedula": `${cedula}`,
      "telefono": `${telefono}`,
      "colegio_Electoral": `${colegio_Electoral}`,
      "cordinador": `${cordinador}`
    });
    
    var config = {
      method: 'post',
      url: 'https://www.api-prm.somee.com/api/Zona_R',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
   .then(function (response) {
          //console.log(JSON.stringify(response.data));
          setData(response.data);
          setLoading(false);
    })
   .catch(function (error) {
          console.log(error);
          setLoading(false);

    });
}


//Zona R-1

const zonaR1InsertPerson = async(nombre, cedula, telefono, colegio_Electoral, cordinador, setData, setLoading)=>{

  var data = JSON.stringify({
      "nombre": `${nombre}`,
      "cedula": `${cedula}`,
      "telefono": `${telefono}`,
      "colegio_Electoral": `${colegio_Electoral}`,
      "cordinador": `${cordinador}`
    });
    
    var config = {
      method: 'post',
      url: 'https://www.api-prm.somee.com/api/Zona_R',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
   .then(function (response) {
          //console.log(JSON.stringify(response.data));
          setData(response.data);
          setLoading(false);
    })
   .catch(function (error) {
          console.log(error);
          setLoading(false);

    });
}

export{
    zonaEInsertPerson,
    zonaE1InsertPerson,
    zonaJInsertPerson,
    zonaJ1InsertPerson,
    zonaQInsertPerson,
    zonaQ1InsertPerson,
    zonaQ2InsertPerson,
    zonaRInsertPerson,
    zonaR1InsertPerson
}