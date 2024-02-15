const City = require("../models/City")

async function createCities () {
    await City.bulkCreate([
        {
            name:"Valencia",
            country:"Venezuela",
            isCapital:false
        },
        {
            name:"Caracas",
            country:"Venezuela",
            isCapital:true
        },
        {
            name:"Nueva Esparta",
            country:"Venezuela",
            isCapital:false
        },
    ])

}

module.exports = createCities