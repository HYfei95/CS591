const express = require('express');
const router = express.Router();
const request = require('request-promise');
const fetch = require("node-fetch");
const mongoDB = require('./common_mongo.js');
const configs = require('../config/configs');

router.get('/:cur', function (req, res, next) {
    const options = {
        method: 'GET',
        url: configs.url1,
        qs:
            {
                access_key: configs.access_key1,
                currencies: req.params.currencies,
            },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };


    mongoDB.connectToServer(function (err) {
        const db = mongoDB.getDB();
        db.collection("currency_news").findOne({name: req.params.currency}, function (err, result) {
            if (err) throw err;
            if (result) {
                console.log('Result is cached');
                res.send(result);
            } else {
                console.log('Result is not cached');
                request(options)
                    .then(function (data) {
                        const searchSecond = data.quotes; //First api looks for exchange rate of USD to user input currency type, data.quotes include the two names of the currencies

                        fetch(configs.url2 + '?' + configs.access_key2 + '&' + searchSecond) //Second api uses two currencies' name and search for the economy news of this two, then returns url for the news page
                            .then(res => res.json())
                            .then(function (finaldata) {
                                const storeData = {
                                    name: data.target,
                                    source_currency: data.source,
                                    exchange_rate: data.rate,
                                    news_url: finaldata.url,
                                }
                                storeData.wasCached = true;
                                mongoDB.insertRecord("currency_news", storeData);

                                res.send(storeData);
                            })
                            .catch(function (err) {
                                console.log(`ERROR ${err}`)
                            });

                    })
                    .catch(function (err) {
                        console.log(`ERROR ${err}`)
                    });
            }
        })


    })
});

module.exports = router;

