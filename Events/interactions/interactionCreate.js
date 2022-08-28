
const config = require(`${process.cwd()}/config/config.json`)
const ms = require('ms')
 
const { CommandInteraction, EmbedBuilder, Collection, PermissionsBitField } = require("discord.js");
module.exports = {
  name: "interactionCreate",
  /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) {
      return interaction.reply({ content: "This command is outdated." });
    }
      

					


                    
    command.execute(interaction, client);
  },
};
