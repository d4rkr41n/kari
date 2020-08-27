
var masterAboutText = "**I can show you what I'm really made of** :stuck_out_tongue: \n"+
    "\nCheck me out on github...\n"+
    "https://github.com/d4rkr41n/kari";

exports.run = (client, message, args, servers) => {
    message.channel.send(masterAboutText).catch(console.error);
    console.log(message.author.username + ' asked about');
}



