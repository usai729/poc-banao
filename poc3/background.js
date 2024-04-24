/*
const profiles = [
			"https://www.linkedin.com/in/aravindnaidu12/",
			"https://www.linkedin.com/in/karishma-jangid-7429111b5/",
			"https://www.linkedin.com/in/anish-kasturi-255363224/",
		];
*/

chrome.runtime.onMessage.addListener(async function (
	message,
	sender,
	sendResponse,
) {
	if (message.action === "scrapeProfiles") {
		const profiles = [
			"https://www.linkedin.com/in/aravindnaidu12/",
			"https://www.linkedin.com/in/karishma-jangid-7429111b5/",
			"https://www.linkedin.com/in/anish-kasturi-255363224/",
		];

		await Promise.all(profiles.map(openLinkedInProfile));
	}
});

async function openLinkedInProfile(url) {
	return new Promise((resolve) => {
		chrome.tabs.create({ url: url, active: false }, async function (tab) {
			console.log("Tab ID:", tab.id);

			await scrapeProfileData(tab.id);
			resolve();
		});
	});
}

async function scrapeProfileData(tabId) {
	return new Promise((resolve) => {
		chrome.scripting.executeScript(
			{
				target: { tabId: tabId },
				files: ["content.js"],
			},
			function () {
				resolve();
			},
		);
	});
}

chrome.runtime.onMessage.addListener(async function (
	message,
	sender,
	sendResponse,
) {
	if (message.action === "sendDataToAPI") {
		try {
			const response = await fetch("http://localhost:3001/scrape", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ data: message.data }),
			});
			const data = await response.json();
			console.log("Data sent to API:", data);
		} catch (error) {
			console.error("Error sending data to API:", error);
		}
	}
});
