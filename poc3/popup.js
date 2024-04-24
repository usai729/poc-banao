document.addEventListener("DOMContentLoaded", function () {
	const button = document.getElementById("get-title");
	const titleDisplay = document.getElementById("title-display");

	button.addEventListener("click", async function () {
		const profiles = [
			"https://www.linkedin.com/in/aravindnaidu12/",
			"https://www.linkedin.com/in/karishma-jangid-7429111b5/",
			"https://www.linkedin.com/in/anish-kasturi-255363224/",
		];

		const requests = profiles.map(async (profile) => {
			const response = await fetch(
				`http://localhost:3001/scrape?linkedinUrl=${encodeURIComponent(
					profile,
				)}`,
				{
					body: {},
					method: "post",
				},
			);
			return response.json();
		});

		const responseData = await Promise.all(requests);
		console.log(responseData);
	});
});
