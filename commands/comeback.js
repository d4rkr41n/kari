//Posts a funny comeback message
exports.run = (client, message, args, servers) => {
    const comebacks = require('../dictionaries/comebacks');

    console.log(message.author.username + ' asked for a comeback');
    message.channel.send(comebacks.dict()).catch(console.error);
}
