const place = require("./lugar")
const {comando} = require("./comandos")
const clima = require("./clima")
const color = require("colors")



// place.getPlace(comando.direccion)
// .then(resp=>{
//     console.log(resp)
    

// }).catch(err=>{
//     console.log(err)
// })


let getInfo = async()=>{
    try {
        let objeto = await place.getPlace(comando.direccion)
        let climax = await clima.getClima(objeto.lat,objeto.lng)
        return climax
    } catch (error) {
        return false
    }

    
}


getInfo().then(resp=>{
    
    
    if(!resp){
        console.log(`no se ha encontrado la direccion <${comando.direccion}>`)
        return;
    }


        console.log(`EL CLIMA DE ${resp.nombre}`.magenta)
        console.log(`EL PAIS ES ${resp.pais}`.cyan)
        console.log(`la temperatura actual es ${resp.temp} C°`.green)
        console.log(`la temperatura minima es ${resp.min_temp} C°`.red)
        console.log(`la temperatura maxima es ${resp.max_temp} C°`.yellow)
    


})



// clima.getClima(35,139).then(temp=>{
//     console.log(temp)
// }).catch(err=>{
//     console.log("ERROR AL OBTENER EL CLIMA",err)
// })


