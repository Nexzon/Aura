const { ActivityType } = require("discord.js")

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
      try {
       
          client.user.setActivity(`New update 1.0.7`, {type: ActivityType.Streaming, url: 'https://www.twitch.tv/discord/'})
    console.log(`Logged as ${client.user.username}`);
  }
      catch(error) { console.log(error)
          }},
};
