exports.up = async (queryInterface, Sequelize) => {
	await queryInterface.createTable("Profiles", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		url: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		bio: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
	});
};

exports.down = async (queryInterface, Sequelize) => {
	await queryInterface.dropTable("Profiles");
};
