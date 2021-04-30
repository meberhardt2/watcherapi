/**************************************************************************************/
module.exports = class search{

	/********************************************/
	constructor(creds,axios) {
		this.creds = creds;
        this.post = {};
		this.axios = axios;
	}
	/********************************************/


	/********************************************/
	async search(){
		const response = await this.axios.get('https://imdb8.p.rapidapi.com/auto-complete', {
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
