const mongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017';

let _db ;

module.exports = {

    connectToServer: function( callback ) {
        mongoClient.connect(mongoURL, function(err, client) {
            _db = client.db("CurrencyInfo");
            return callback(err);
        });
    },

    getDB: function() {
        return _db;
    },
    insertRecord: function(collection, obj){
        _db.collection(collection).insertOne(obj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
        });
    },
};
