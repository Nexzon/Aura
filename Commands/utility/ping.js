const { client, 
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits, EmbedBuilder 
} = require("discord.js");
const style = require(`${process.cwd()}/style/embed.json`)
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("View my ping")
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
  /**
   * @param {CommandInteraction} interaction
   */
  execute(interaction, client) {
  
  
    interaction.reply({embeds: [new EmbedBuilder()
  .setColor(style.color)
  .setDescription(`${style.check} My ping is **${Math.round(`${client.ws.ping}`)}ms**`)]})
  },
};
