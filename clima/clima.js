const axios = require('axios');

const getClima = async(latitud, longitud) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=daec4d98b040f8520f0aabf4ca0b1677&units=metric`);
    return (resp.data.main.temp);
};

module.exports = {
    getClima
}