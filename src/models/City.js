const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const City = sequelize.define('city', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isCapital: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

//User.prototype.toJSON = function () {
//	const values = { ...this.get() };
//	delete values.password ;
//	return values;
//};
module.exports = City;