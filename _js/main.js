var axios = require('axios')

module.exports = {
	sendNotification: function(type) {

		axios.post('https://api.gooferville.com/notify/trigger', {
			"discord_hooks": ["https://discord.com/api/webhooks/956598012954673162/JmmbBreSRt-8k2r-0QExUqsDCP3Ph0actwEx1NWwbnCkyS7gICUpKsTtAZDG4JW59l26"],
			"ifttt_hook": "https://maker.ifttt.com/trigger/visit/with/key/b671wE8bjS_ZWi8FMMmD-h",
			"title": "officialgoofer.com - " + type
		})
	},
}