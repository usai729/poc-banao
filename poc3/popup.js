document.addEventListener("DOMContentLoaded", function () {
	const scrapeButton = document.getElementById("scrapeButton");

	scrapeButton.addEventListener("click", function () {
		chrome.runtime.sendMessage({ action: "scrapeProfiles" });
	});
});
