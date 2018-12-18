const argv = require("yargs")

// comando
argvx = argv.options({
    direccion:{
        alias:"d",
        desc:"direccion de la ciudad para obtener el clima",
        demand:true
    }
}).argv


module.exports = {
    comando: argvx
}