const mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if(err) {
        console.log("There was an error connecting to the database" + err.stack);
        return;
    }
    console.log("You connected to the database with ID " + connection.threadId);
});

module.exports = connection; 
