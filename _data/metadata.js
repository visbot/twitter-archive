let data = {
	username: "visbot", // No leading @ here
	homeLabel: "visbot.net",
	homeUrl: "https://visbot.net/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;