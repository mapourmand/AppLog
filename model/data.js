
function mainChartActiveUser(req, res) {

    var totalActive =  [ [0, 5], [1, 4], [2, 3], [3, 3.5], [4, 4], [5, 6.0], [6, 5.0], [7, 5.1] ];
    var newActive = [ [0, 5.6], [1, 4.9], [2, 4.1], [3, 3.8], [4, 4.6], [5, 6.7], [6, 5.7], [7, 5.9] ];
    res.status(200).json({ "totalActive" : totalActive,
                            "newActive"  : newActive});
}

function bannerFunnel(req, res) {

    

    var totalActive =  [ [5, 0], [4, 1], [3, 2]];
   // var newActive = [ [0, 5.6], [1, 4.9], [2, 4.1], [3, 3.8], [4, 4.6], [5, 6.7], [6, 5.7], [7, 5.9] ];

    var funnel = [];
    funnel.push(totalActive);
   // funnel.push(newActive);

    res.status(200).json(funnel);
}

module.exports = { mainChartActiveUser, bannerFunnel }
