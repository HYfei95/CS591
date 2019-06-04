const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('result', { string: 'Hey now'});
});

router.post('/', function(req, res, next) {
    const data = req.body.string;
    res.render('result', { string: data, stringlen: data.length });
});


module.exports = router;
