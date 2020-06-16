// const argv = require('yargs').argv;
const colors = require('colors');
const argv = require('./config/yars').argv;
const porHacer = require('./por-hacer/por-hacer');
console.log(argv);


let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.description);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log(`=== Por Hacer ===`.green);
            console.log(tarea.descripcion);
            console.log(`Estado:`, tarea.completado);
            console.log(`=================`.green);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.description);
        console.log(borrado);

        break;


    default:
        console.log('El comando no forma parte de las opciones que acepto');
}