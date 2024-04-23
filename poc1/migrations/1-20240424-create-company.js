exports.up = async (QueryInterface, Sequelize) => {
	await QueryInterface.createTable("Companies", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		country: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		website: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
	});
};

exports.down = async (queryInterface, Sequelize) => {
	await queryInterface.dropTable("Companies");
};
