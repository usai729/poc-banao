const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Profile = sequelize.define(
	"Profile",
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
		url: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},

		bio: {
			type: DataTypes.STRING,
		},
	},
	{
		timestamps: false,
	},
);

module.exports = Profile;
