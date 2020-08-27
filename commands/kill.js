//Posts a funny death message for a given string
exports.run = (client, message, args, servers) => {
    const kills = require('../dictionaries/kills');

    if(typeof args[0] === 'undefined'){
        message.channel.send("Yo! Tell me who or what to kill!").catch(console.error);
        return;
    }
    var target = args.join(' ');
    console.log(message.author.username + ' asked me to kill ' + target);
    message.channel.send(target + kills.dict()).catch(console.error);
}
