const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Company = sequelize.define(
	"Company",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		country: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		website: {
			type: DataTypes.STRING,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		verified: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
	},
	{
		timestamps: false,
	},
);

module.exports = Company;
