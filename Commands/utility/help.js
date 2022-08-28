const { client, 
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits, EmbedBuilder 
} = require("discord.js");
const style = require(`${process.cwd()}/style/embed.json`)
module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("View my help menu")
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
  /**
   * @param {CommandInteraction} interaction
   */
  execute(interaction, client) {
  
  
    interaction.reply({embeds: [new EmbedBuilder()
  .setColor(style.color)
  .setDescription(`
  ⚙️ **Other**
\`invite\`, \`ping\`, \`help\`

🎶 **Music**
\`autoplay\`,\`disconnect\`, \`join\`, \`loop\`, \`pause\`, \`play\`, \`previous\`, \`queue\`, \`resume\`, \`seek\`, \`shuffle\`, \`skipto\`, \`skip\`, \`stop\`, \`volume\`

📔 **Playlist**
\`playlist add\`, \`playlist create\`, \`playlist delete\`, \`playlist destroy\`, \`playlist list\`, \`playlist play\`, \`playlist remove\`, \`playlist view\``)]})
  },
};
