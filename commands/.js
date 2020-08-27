exports.run = (client, message, args, servers) => {
    message.reply("what's up?").catch(console.error);
    console.log(message.author.username + ' said my name');
}



