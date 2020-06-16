const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'

}

const argv = require('yargs')




.command('crear', 'crear elemento por hacer', {

})

.command('actualizar', 'Actualiza el estado completado de una tarea', {
    description,
    completado

})


.command('borrar', 'borrar una tarea', {
    description

})




.help()
    .argv

module.exports = {
    argv
}