const axios = require("axios")





let getClima = async(lat,lng)=>{
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=49ef2dab13112118e55f381139ce063d`)
    // console.log(result.data)

    var temp = result.data.main
    var local = result.data
    var pais = local.sys.country

    let response = {
        temp: temp.temp,
        min_temp: temp.temp_min,
        max_temp: temp.temp_max,
        nombre: local.name,
        pais
    }

    return response
}

module.exports = {
    getClima
}