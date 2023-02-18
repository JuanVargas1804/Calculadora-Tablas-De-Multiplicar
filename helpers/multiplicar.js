const fs = require('fs');
var colors = require('colors');


const crearArchivoTablaPromesa = (base = 1, listar = false, hasta = 5) => {


    
    return new Promise((resolve, reject) => {
        
        let salida = '';
        if(!Number(base)){
            reject("Hay problemas con la base");
            return;
        } else {
            for(i = 0; i <= hasta; i++){
                salida += `${base} * ${i}: ${base * i}\n`;
                    
                }
        }
        if (listar){
            console.clear();
            console.log("-----------------------".bold);
            console.log("Tabla de multiplicacion".rainbow);
            console.log("-----------------------".bold);
            console.log(salida.bold);

        }

        fs.writeFile(`./salida/Tabla-Del-${base}.txt`, salida, (err) => {
            if (err) reject(err)
            else{
                resolve(`./salida/Tabla-Del-${base}.txt`);
            }
        })

        
    });
   
}



module.exports = {
    crearArchivoTablaPromesa,
}
