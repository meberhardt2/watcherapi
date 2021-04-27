/**************************************************************************************/
const search = (app,creds) => {

    /********************************************/
	app.post('/api/search', (request, response) => {
		const Search = require('../classes/search');
		let search = new Search(creds);

		search.post = request.body;
		let data_out = search.search();
		
		response.json(data_out);
	});	
	
}
/**************************************************************************************/

module.exports = search;
