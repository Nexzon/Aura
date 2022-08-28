const {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits, EmbedBuilder 
} = require("discord.js");
const style = require(`${process.cwd()}/style/embed.json`)

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite me to your server")
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
  /**
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {
  
  
    interaction.reply({embeds: [new EmbedBuilder()
  .setColor(style.color)
  .setDescription(`${style.invite} Thank you for wanting to invite me, invite me by clicking **[here](https://discord.com/api/oauth2/authorize?client_id=${interaction.client.user.id}&permissions=8&scope=bot%20applications.commands)**`)]})
  },
};
