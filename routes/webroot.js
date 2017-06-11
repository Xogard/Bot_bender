var express = require('express');
var router = express.Router();

function makeWebrootResult(req, res){

    var cost = {'Calabresa':100, 'Portuguesa':200, 'Margueritta':300, 'Napolitana':400, 'Strogonoff':500}

        let result = new Object();
        let parameters = new Object();
        result = req.body.result;   

        let action = result.action;
    
    if ( action === 'Custo'){
        
        parameters = result.parameters;
        let zone = parameters["Sabores"];
        console.log(zone.toString() + ' ' + cost[zone]);
        let valor = cost[zone];

        let speech = "A pizza de " + zone + " custa " + valor + " reais.";

        var response = new Object();
        response.speech = speech;
        response.displayText = speech;
        response.source = "apiai-onlinestore-shipping";

        return JSON.stringify(response);

    }
    else{
        return JSON.stringify("ERRO");
    }    
}

/* POST users listing. */
router.post('', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    var response;
    console.log('Olá');
    response = makeWebrootResult(req,res);
    console.log('resposta');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
    console.log('envio');
});


module.exports = router;
