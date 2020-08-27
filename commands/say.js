exports.run = (client, message, args, servers) => {
    //say whatever the user wants
    if(message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES", false)){
      tosay = args.join(' ')
      console.log(message.author.username + ' asked me to say ' + tosay)
      message.channel.send(tosay);
      message.delete();
    }
}
