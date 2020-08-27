var masterHelpText = "__**So far, this is what I know...**__\n\n"+

    "> `ily`  Get some love\n"+
    "> `bitcoin`  Gets the current bitcoin price\n"+
    "> `countusers`  I'll tell you how many people are in the server!\n"+
    "> `kill <something/someone>`  gives a random death message\n"+
    "> `comeback`  gives a random comeback for your enemies... or friends ;)\n"+
    "> `say <something to say>`  repeat/delete your message **Requires MANAGE MESSAGES**\n"+
    "> `purge <number>` delete up to 99 recent messages defaults to 99 **Requires MANAGE MESSAGES**\n"+
    "> `code`  What makes me tick!\n"+
    "> `help`  A list of available commands! (✿ ◠‿◠)\n"+
    "\nLike me? Follow my bud ***@meisrain*** on Twitter!\nhttps://twitter.com/meisrain";

exports.run = (client, message, args, servers) => {
    console.log(message.author.username + ' asked for help');
    message.channel.send(masterHelpText).catch(console.error);
}
