const axios = require("axios")


let getPlace = async(direccion)=>{
    
    let encodeURL = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)


    if(resp.data.status == 'ZERO_RESULTS'){
        throw new Error("NO SE HAN ENCONTRADO RESULTADOS")
    }


    var direccion = resp.data.results[0]
    var coors = direccion.geometry.location
    

    // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    // .then(resp=>{

    //     var direccion = resp.data.results[0]
    //     var coors = direccion.geometry.location
    //     console.log(`la direccion es: ${direccion.formatted_address}`)
    //     console.log(`latitud ${coors.lat} y logitud ${coors.lng}`)
    // })
    // .catch(e=>{
    //     console.log("ERROR !!!",e)
    // })

    return {
        lat: coors.lat,
        lng: coors.lng,
        address: direccion.formatted_address
    }
}

module.exports = {
    getPlace
}
