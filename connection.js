
var mysql = require('mysql')

console.log("start connection");
var connection = mysql.createConnection({
  host     : '107.180.9.111',
  user     : 'brandongodaddy91',
  password : '123456',
  database : 'phrase_api'
});
console.log("processing connection");
//connection.connect()
module.exports = {connection}
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()