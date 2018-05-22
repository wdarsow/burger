const orm = require('../db/config/orm.js');

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            //console.log("this is the burger selectAll function")
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(colVals, condition, cb) {
        orm.updateOne("burgers", colVals, condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;
