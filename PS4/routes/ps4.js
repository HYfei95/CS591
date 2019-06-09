const express = require('express');
const router = express.Router();
const request = require('require-promise');
const configs = require('../config/currency');


const options = {
    method: 'GET',
    url: configs.url,
    qs:
        {
            access_key: configs.access_key,
            currencies: 'CAD'
        },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true
};

console.log(configs.url);
console.log(configs.access_key);
request(options)
    .then(function(res) {
        console.log(res.quotes)
    })
    .catch(function (err) {
        console.log(`ERROR ${err}`)
    });

module.exports = router;
