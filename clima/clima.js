const axios = require('axios');

const getClima = async(lng, lat) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c2fcd2cf65feee9eaa15636c72579ccb&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}