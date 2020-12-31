const argv = require('./config/yargs').argv;
//const { getLugar } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

/*getLugar(argv.direccion)
    .then(respuesta => { console.log(respuesta) })
    .catch(error => console.log(error));*/

getClima(40.750000, -74.000000)
    .then(resp => console.log(resp))
    .catch(error => console.log(error));