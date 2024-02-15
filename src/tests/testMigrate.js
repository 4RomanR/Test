const sequelize = require("../utils/connection");
const createCities = require("./createCities");
require('../models')

const testMigrate = async()=>{

    try{
        await sequelize.sync({force:true})
        console.log('DB reset ✅');
        //await createCities()
        process.exit()
    }catch(error){
        console.error(error);
    }
}


testMigrate()