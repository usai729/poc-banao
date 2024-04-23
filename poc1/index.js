const Sequelize = require("sequelize");
const express = require("express");

const sequelize = require("./config/db");
const Company = require("./models/company.model");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
	req.sequelize = sequelize;

	next();
});

app.get("/", async (req, res) => {
	try {
		const query = await Company.findAll({
			attributes: ["id", "email"],
		});

		res.status(200).json({
			success: true,
			data: query,
			error: null,
		});
	} catch (e) {
		console.error("Error updating company:", e);

		res.status(500).json({
			success: false,
			data: null,
			error: e,
		});
	}
});

app.put("/verify/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const [rowsUpdated] = await Company.update(
			{ verified: true },
			{ where: { id: id }, returning: true },
		);

		if (rowsUpdated === 0) {
			return res.status(404).json({
				success: false,
				data: null,
				error: "Company not found!",
			});
		}

		const updatedCompany = await Company.findOne({ where: { id: id } });

		res.status(200).json({
			success: true,
			data: updatedCompany,
			error: null,
		});
	} catch (e) {
		console.error("Error updating company:", e);

		res.status(500).json({
			success: false,
			data: null,
			error: e,
		});
	}
});

app.listen(3001, () => {
	console.log();
	console.log("Server is running on port 3001@http://localhost:3001");
	console.log();
});
