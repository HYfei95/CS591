const express = require('express');
const router = express.Router();
const request = require('require-promise');
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
            res.render('ps4', {data});
        })
        .catch(function (err) {
            console.log(`ERROR ${err}`)
        });
});
module.exports = router;
