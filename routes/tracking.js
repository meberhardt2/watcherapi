/**************************************************************************************/
const tracking = (app,DB,allowed_ip) => {

    /********************************************/
	app.post('/api/trackit', (request, response) => {
		const remoteAddress = request.connection.remoteAddress;
		if(remoteAddress.includes(allowed_ip)){
            const Tracking = require('../classes/tracking');
            let tracking = new Tracking(DB);

            tracking.id = request.body;
            tracking.trackit();
            
            response.json({'status': tracking.status});
		}
		else{
			response.json({'status': 'forbidden'});
		}
	});	
    /********************************************/
	
}
/**************************************************************************************/

module.exports = tracking;
