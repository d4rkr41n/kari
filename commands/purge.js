//Deletes messages that are under 14 days old up to 99 messages at a time
exports.run = (client, message, args, servers) => {
    //Check if user has needed permissions in specific channel
    let perms = message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES", false);
    if(!perms){
	message.reply("You aren't cool enough for those powers ;)").catch(console.error);
	return;
    }

    var arg1 = args[0];
    if(isNaN(arg1) && typeof arg1 !== 'undefined'){
        message.reply('haha, give me an actual number!').catch(console.error);
	return;
    }
    else{
        arg1 = parseInt(arg1);
    }

    var amountToDelete = 99;
    if(arg1 < 100 && arg1 > 0 && typeof arg1 !== 'undefined'){
        amountToDelete = arg1 + 1;//This also gets rid of the message that was sent to Kari to activate the purge
    }
    console.log(message.author.username + ' told me to delete ' + amountToDelete + ' message(s)');
    message.channel.bulkDelete(amountToDelete);
}
