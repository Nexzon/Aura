const {   SlashCommandBuilder,   ChatInputCommandInteraction,   PermissionFlagsBits, EmbedBuilder, PermissionsBitField } = require("discord.js"); 
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const style = require(`${process.cwd()}/style/embed.json`)
const discord = require('discord.js');
const Discord = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("queue")
    .setDescription("The music queue")
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

                           /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    try {
        const queue = client.distube.getQueue(interaction)
        if (!queue) { interaction.reply({ content: "The queue is currently empty", ephemeral: true }) } else {
            const q = queue.songs
                .map((song, i) => `${i === 0 ? 'Playing:' : `${i}.`} **[${song.name}](${song.url})** - \`${song.formattedDuration}\``)
.join('\n')
interaction.reply({embeds: [new EmbedBuilder()
.setColor(style.color)
.setDescription(`${q}`)]})
}
                         
                        } catch(error) {
                            interaction.reply({embeds: [new EmbedBuilder()
                                .setColor(style.errorColor)
                                .setTitle("An error occured")
                                .setDescription(`${style.error} Values could be empty, as a result the command not working. Or the queue is empty
                                
                                **Logged error**
                                \`\`\`js
                                ${error}\`\`\``)], ephemeral: true})
                                console.log(error)
                        }


                    }
                }