/**************************************************************************************/
module.exports = class search{

	/********************************************/
	constructor(creds) {
		this.creds = creds;
        this.post = {};
	}
	/********************************************/


	/********************************************/
	async search(){
		const axios = require("axios");

		const response = await axios.get('https://imdb8.p.rapidapi.com/auto-complete', {
			headers: {
                'x-rapidapi-key': this.creds.rapidapi.key,
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
			},
			params: {
				q: this.post.query
			}
		});

		return response;
    }
	/********************************************/

}
/**************************************************************************************/
