/**************************************************************************************/
const search = (app,creds) => {

    /********************************************/
	app.post('/api/search', async (request, response) => {
		const Search = require('../classes/search');
		let search = new Search(creds);

		search.post = request.body;
		let data_out = await search.search();

		response.json({
			results: data_out.data.d,
			total: data_out.data.d.length
		});
	});	
    /********************************************/
	
}
/**************************************************************************************/

module.exports = search;
