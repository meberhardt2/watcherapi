const express = require("express");
const cors = require('cors');
const fs = require('fs');
const creds = JSON.parse(fs.readFileSync(__dirname+'/../conf/watcherapi.json', 'UTF-8'));
const ip = require('my-local-ip')();
const allowed_ip = ip.replace(/(?:\.\d+){1}$/, '');     //only allow devices on the same network (local) to make updates

const search = require('./routes/search');
const tracking = require('./routes/tracking');
const streams = require('./routes/streams');

//console.log(util.inspect(response.data, false, null, true));
//const util = require('util');


const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));


if(ip.includes("10.192.106")){
    const http = require('http');
    http.createServer(app).listen(2006);
}
else{
    const https = require('https');
    const sslOptions = {
        key: fs.readFileSync("/etc/letsencrypt/live/eberhardt.cloud/privkey.pem"),
        cert: fs.readFileSync("/etc/letsencrypt/live/eberhardt.cloud/fullchain.pem")
    };
    https.createServer(sslOptions, app).listen(2006);
}


//node-sqlite3 runs asynchronous, which leads to promise mess of chaining. better-sqlite3 runs synchronously
const DB_PATH = __dirname+'/sqlite.db';
const sqlite3 = require('better-sqlite3');
const DB = new sqlite3(DB_PATH);


//Routes
search(app,creds);
tracking(app,DB,allowed_ip);
streams(app,DB,allowed_ip);

