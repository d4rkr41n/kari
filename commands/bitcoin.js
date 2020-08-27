exports.run = (client, message, args, servers) => {
    // send a request to blockchain
    var request = require('request');
    var btc;
    request('https://blockchain.info/de/ticker', (error, response, body) => {
        // parse the json answer and get the current bitcoin value
        const data = JSON.parse(body);
        var price = ((parseInt(data.USD.buy, 10) + parseInt(data.USD.sell, 10)) / 2);
        var btc = 'The current exchange BTC price is $' + price;
	    console.log("Posting the bitcoin price");
        message.channel.send(btc).catch(console.error);
    });
}
