const argv = require("yargs")
                .option("b", {
                    alias: "base",
                    type: "number",
                    demandOption: "true",
                    describe: "Es la base de la tabla de multiplación"
                    
                })
                .option("l", {

                    alias: "listar",
                    type: "boolean",
                    default: false,
                    describe: "Muestra la traba de multiplicación"
                })
                .option("h", {

                    alias: "hasta",
                    type: "number",
                    describe: "Hasta donde debe llegar la multiplicación",
                    demandOption: true,
                })

                .check( (argv, options) =>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero';
                    }else if((isNaN(argv.h))){
                        throw 'El comando -h debe ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;