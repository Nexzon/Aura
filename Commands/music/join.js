const {   SlashCommandBuilder,   ChatInputCommandInteraction,   PermissionFlagsBits, EmbedBuilder, PermissionsBitField } = require("discord.js"); 
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const style = require(`${process.cwd()}/style/embed.json`)
const discord = require('discord.js');
const Discord = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Let me join a voice channel")
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

                           /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    try {
        let voiceChannel = interaction.member.voice.channel
        client.distube.voices.join(voiceChannel)

        client.distube.voices.leave(interaction)
        interaction.reply({embeds: [new EmbedBuilder()
            .setColor(style.color)
            .setDescription(`${style.join} Join a voice channel`)]})

                         
                        } catch(error) {
                            interaction.reply({embeds: [new EmbedBuilder()
                                .setColor(style.errorColor)
                                .setTitle("An error occured")
                                .setDescription(`${style.error} Values could be empty, as a result the command not working. Or the queue is empty. Or i could already be in a voice channel. Or you're not connected to one
                                
                                **Logged error**
                                \`\`\`js
                                ${error}\`\`\``)], ephemeral: true})
                                console.log(error)
                        }


                    }
                }