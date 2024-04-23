exports.up = async (queryInterface, Sequelize) => {
	await queryInterface.addColumn("Companies", "verified", {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
	});
};

exports.down = async (queryInterface, Sequelize) => {
	await queryInterface.removeColumn("Companies", "verified");
};
