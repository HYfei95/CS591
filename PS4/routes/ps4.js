const express = require('express');
const router = express.Router();
const request = require('request-promise');
const configs = require('../config/currency');

router.get('/', function (req, res, next) {
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


    request(options)
        .then(function (data) {
            res.render('ps4', {string:data.quotes});
        })
        .catch(function (err) {
            console.log(`ERROR ${err}`)
        });
});
module.exports = router;
