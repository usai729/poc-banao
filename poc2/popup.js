document.addEventListener("DOMContentLoaded", function () {
	const button = document.getElementById("get-title");
	const titleDisplay = document.getElementById("title-display");

	button.addEventListener("click", function () {
		chrome.tabs.query(
			{ active: true, currentWindow: true },
			function (tabs) {
				const currentTab = tabs[0];
				const title = currentTab.title;
				titleDisplay.textContent = title;
			},
		);
	});
});
