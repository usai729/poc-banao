const express = require("express");
const cors = require("cors");
const pup = require("puppeteer");

const sequelize = require("./config/db");
const Profile = require("./models/profiles.models");

const app = express();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
	req.seq = sequelize;

	next();
});

app.get("/", async (req, res) => {
	const data = await Profile.findAll();

	res.send(data);
});

app.post("/scrape", async (req, res) => {
	const { linkedinUrl } = req.query;

	try {
		console.log(linkedinUrl);
	} catch (e) {
		console.log(e);

		res.json({
			success: false,
			data: null,
			error: e,
		});
	}
});

app.listen(3001, () => {
	console.log("Server running on port 3001@http://localhost:3001");
});
