const connection = require('./connection.js');

console.log("hello, this is the orm.js file");

let theTable = "burgers";

let orm = {
    selectAll: function(theTable, cb) {
        let queryString = "SELECT * FROM " + theTable + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            } else {
                console.log(result);
                console.log("select all ORM function")
                cb(result);
                //return result; 
            }

        });
    },
    insertOne: function(tables, cols, vals, cb) {
        tables = "burgers";
        let queryString = "INSERT INTO " + tables + " (" + cols.toString() + ") " + "VALUES" + " (" + vals + ") ";
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if(err) {
                throw err;
            } else {
                console.log(result);
                return result;
            }
        });
    },
    updateOne: function(tables, colVals, condition, cb) {
        let queryString = "UPDATE " + tables + " SET " + objToSql(colVals) + " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            } else {
                cb(result);
                console.log(result);
            }
        });
    }
}

module.exports = orm;

