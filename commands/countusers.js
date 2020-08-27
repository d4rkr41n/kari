exports.run = (client, message, args, servers) => {

    //var usercount = message.guild.members.filter(member => !member.user.bot).size;

    const guild = message.guild;

    var memberCount = guild.memberCount;

    message.reply(`${guild.name} has ${memberCount} members!`);
    console.log(`${message.author.username} asked me for a usercount for ${guild.name}.`);
}



