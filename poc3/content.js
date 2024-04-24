const name = document
	.querySelector(
		".text-heading-xlarge.inline.t-24.v-align-middle.break-words",
	)
	?.textContent.trim();
const url = window.location.href;
const followers = document
	.querySelector(".text-body-small t-black--light inline-block")
	?.textContent.trim();
const connections = document
	.querySelector(".text-body-small.t-black--light.inline.v-align-middle")
	?.textContent.trim();
const bio = document
	.querySelector(".text-body-medium.break-words")
	?.textContent.trim();

const profileData = {
	name: name,
	url: url,
	followers,
	connections,
	bio,
};

chrome.runtime.sendMessage({ action: "sendDataToAPI", data: profileData });
