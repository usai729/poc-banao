document.addEventListener("DOMContentLoaded", function () {
	const button = document.getElementById("get-title");
	const titleDisplay = document.getElementById("title-display");

	button.addEventListener("click", function () {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			const currentTab = tabs[0];

			titleDisplay.innerHTML = currentTab.title;
		});
	});
});
