
function sendToInflux(req, res) {
    console.log('Influxlog');
    console.log(JSON.stringify(req.body));
    try {
        var request = require('request');
        var db = req.query.db; //('db');   
        var log = req.query.log; //.replace("'","");
        var action = req.query.action;
        log = log.replace(",", ",ad_action=\""+action+"\",");
        console.log(log);
        request({
            url: 'http://95.156.255.226:8086/write?db='+db,
            method: 'post',
            body: log,
            header: {'Content-Type': 'text/plain'},
            timeout: 600 * 1000
        }, function (error, result, body) {
            console.log("send to influx");
            if (error) {
                res.status(400).json({"msg":error});
            } else if (result.statusCode === 500) {
                res.status(500).json({"msg":error});
            } else {
                console.log("Submit Successfully");

                res.status(200).json(JSON.stringify(body));
                return;
            }
        });
    }
    catch(err) {
        res.status(404).json(err);
    }
}

module.exports = { sendToInflux }