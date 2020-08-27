module.exports = (servers, client) => {
  // We online!

  console.log("===============================\n"+
              "   _   __  ___  ______ _____   \n"+
              "  | | / / / _ \\ | ___ \\_   _|  \n"+
              "  | |/ / / /_\\ \\| |_/ / | |    \n"+
              "  |    \\ |  _  ||    /  | |    \n"+
              "  | |\\  \\| | | || |\\ \\ _| |_   \n"+
              "  \\_| \\_/\\_| |_/\\_| \\_|\\___/   \n"+
              "-------------------------------\n"+
              "=========================================================================================\n");

  console.log(`${client.user.tag}, ready to help ${client.users.cache.size} users in ${client.guilds.cache.size} servers.`, "ready");

  // change status.
  //client.user.setActivity(' you! <3', { type: 'LISTENING' });

  client.user.setActivity(` ${client.guilds.cache.size} servers! <3`, { type: 'LISTENING' });

  setInterval(function(){
    client.user.setActivity(` ${client.guilds.cache.size} servers! <3`, { type: 'LISTENING' });
  }, 30000);
};
