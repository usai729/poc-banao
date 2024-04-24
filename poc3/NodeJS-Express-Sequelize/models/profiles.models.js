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
		about: {
			type: DataTypes.STRING,
		},
		bio: {
			type: DataTypes.STRING,
		},
		location: {
			type: DataTypes.STRING,
		},
		followerCount: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		connectionCount: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
	},
	{
		timestamps: false,
	},
);

module.exports = Profile;
