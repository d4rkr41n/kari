exports.run = (client, message, args, servers) => {
    console.log(message.author.username + ' loves me!');
    message.reply('\n╔♫═╗╔╗ ♥\n'+
                    '╚╗╔╝║║♫═╦╦╦╔╗\n'+
                    '╔╝╚╗♫╚╣║║║║╔╣\n'+
                    '╚═♫╝╚═╩═╩♫╩═╝\n'+
                    'ஜ۩۞۩ஜ YOU ஜ۩۞۩ஜ').catch(console.error);
}
