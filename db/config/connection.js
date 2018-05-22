const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if(err) {
        console.log("There was an error connecting to the database" + err.stack);
        return;
    }
    console.log("You connected to the database with ID " + connection.threadId);
});

module.exports = connection; 
