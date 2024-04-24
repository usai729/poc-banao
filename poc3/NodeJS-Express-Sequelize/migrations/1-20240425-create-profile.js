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
		about: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		bio: {
			type: Sequelize.TEXT,
			allowNull: true,
		},
		location: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		followerCount: {
			type: Sequelize.INTEGER,
			allowNull: true,
		},
		connectionCount: {
			type: Sequelize.INTEGER,
			allowNull: true,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	});
};

exports.down = async (queryInterface, Sequelize) => {
	await queryInterface.dropTable("Profiles");
};
