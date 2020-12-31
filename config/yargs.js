const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Ubicación del punto a conocer clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}