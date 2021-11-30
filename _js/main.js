var axios = require('axios')

module.exports = {
	sendNotification: function(type) {
		let city = ""
		let country = ""

		axios.get('https://json.geoiplookup.io').then((data)=> {
      this.notify(type, data.data)
		})
	},
	notify: function(type, data) {
		axios.get('https://maker.ifttt.com/trigger/visit/with/key/b671wE8bjS_ZWi8FMMmD-h', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
			params: {
				value1: type,
				value2: data.country_name + " - " + data.region + ", " + data.city,
				value3: ""
			}
		})
	}
}