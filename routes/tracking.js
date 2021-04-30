/**************************************************************************************/
const tracking = (app,allowed_ip) => {

    /********************************************/
	app.post('/api/trackit', (request, response) => {
		const remoteAddress = request.connection.remoteAddress;
		if(remoteAddress.includes(allowed_ip)){
            console.log(request.body);
			response.json({'status': 'success'});
            /*
            const Tracking = require('../classes/tracking');
            let tracking = new Tracking(creds);

            tracking.id = request.body;
            let data_out = tracking.trackit();
            
            response.json(data_out);
            */
		}
		else{
			response.json({'status': 'forbidden'});
		}
	});	
    /********************************************/
	
}
/**************************************************************************************/

module.exports = tracking;
