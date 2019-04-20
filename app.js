const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true

    }
}).argv;
const getInfo = async(direccion) => {

    try {
        const Coordenadas = await lugar.getLugarLatLng(direccion);
        const climaDelLugar = await clima.getClima(Coordenadas.lng, Coordenadas.lat);
        return `El clima de ${Coordenadas.direccion} es de ${climaDelLugar}°C`;
    } catch (error) {
        return (`No se pudo determinar el clima de ${direccion}`);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);