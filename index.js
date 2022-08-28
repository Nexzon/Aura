const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { EmbedBuilder } = require('discord.js')
const style = require(`${process.cwd()}/style/embed.json`);
const { Rest } = require("@discordjs/rest");
const { Guilds, GuildMembers, GuildMessages, GuildMessageReactions, GuildVoiceStates, GuildEmojisAndStickers } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const { loadEvents } = require("./handlers/EventHandler");
const { loadCommands } = require("./handlers/commandHandler");

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages, GuildMessageReactions, GuildVoiceStates, GuildEmojisAndStickers],
  partials: [User, Message, GuildMember, ThreadMember],
});
const { YtDlpPlugin } = require('@distube/yt-dlp')
const { DisTube } = require('distube')

client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new YtDlpPlugin()
  ]
})

client.commands = new Collection();
client.config = require("./config/config.json");


client.distube
  .on('playSong', (queue, song) =>
      
    queue.textChannel.send({embeds: [new EmbedBuilder()
  .setColor(style.color)
 .setThumbnail(song.thumbnail)
 .setDescription(`${style.music} Added " **${song.name}** " to **queue**
**Requested by:** ${song.user}
**Duration:** \`${song.formattedDuration}\``)]}) 
 ).on('addSong', (queue, song) =>
   queue.textChannel.send({embeds: [new EmbedBuilder()
  .setColor(style.color)
 .setThumbnail(song.thumbnail)
 .setDescription(`${style.music} Added " **${song.name}** " to **queue**
**Requested by:** ${song.user}
**Duration:** \`${song.formattedDuration}\``)]}) 
  )
  

    
        
    
    
 


client.login(client.config.TOKEN)
  .then(() => {
    loadEvents(client);
    loadCommands(client);
  })
  .catch((err) => console.log(err));
