/**************************************************************************************/
module.exports = class search{

	/********************************************/
	constructor(creds) {
		this.creds = creds;
        this.post = {};
	}
	/********************************************/


	/********************************************/
	search(){
        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: this.post.query},
            headers: {
                'x-rapidapi-key': creds.rapidapi.key,
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };
        
        axios.request(options).then(function (response) {
            //console.log(util.inspect(response.data, false, null, true));
            return(response.data);
        }).catch(function (error) {
            console.error(error);
        });        
    }
	/********************************************/

}
/**************************************************************************************/
