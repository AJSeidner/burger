//set up database connection

var mysql = require('mysql');
var connection = mysql.createConnection({
  	//port: 8889,
    host     : 'localhost',
    user     : 'root',
    password : 'MartinD-28', // Add your password
    database : 'burgers_db' // Add your database
  });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Export the Connection
module.exports = connection;