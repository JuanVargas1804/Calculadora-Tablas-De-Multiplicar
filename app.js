const { crearArchivoTablaPromesa } = require('./helpers/multiplicar');
const argv = require("./config/yargs");

console.clear()

crearArchivoTablaPromesa(argv.b, argv.l, argv.h); 