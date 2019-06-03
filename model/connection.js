var mysql = require('mysql')
var connection = mysql.createConnection({
    host     :  '79.175.172.42',
    user     : 'root',
    password : 'm0f!d1380',
    port     : 3306,
    database : 'ikepler'
});

module.exports = {connection}