const express = require("express");
const cors = require('cors');
const axios = require("axios");
const fs = require('fs');
const creds = JSON.parse(fs.readFileSync(__dirname+'/../conf/watcherapi.json', 'UTF-8'));
const util = require('util');
const ip = require('my-local-ip')();

const search = require('./routes/search');


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
//const DB_PATH = __dirname+'/sqlite.db';
//const sqlite3 = require('better-sqlite3');
//const DB = new sqlite3(DB_PATH);


search(app,creds);

/*

const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/auto-complete',
    params: {q: 'life below zero'},
    headers: {
        'x-rapidapi-key': creds.rapidapi.key,
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(util.inspect(response.data, false, null, true));
}).catch(function (error) {
    console.error(error);
});


const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-seasons',
    params: {tconst: 'tt13049144'},
    headers: {
        'x-rapidapi-key': creds.rapidapi.key,
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(util.inspect(response.data, false, null, true));
}).catch(function (error) {
    console.error(error);
});
*/
