const {   SlashCommandBuilder,   ChatInputCommandInteraction,   PermissionFlagsBits, EmbedBuilder, PermissionsBitField } = require("discord.js"); 
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const style = require(`${process.cwd()}/style/embed.json`)
const discord = require('discord.js');
const Discord = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("disconnect")
    .setDescription("Disconnect me from the vc")
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

                           /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    try {
        let voiceChannel = interaction.member.voice.channel
    const { Constants } = require('discord.js')
    if(!voiceChannel) return interaction.reply({content: "You are not in a voice channel", ephemeral: true})


        client.distube.voices.leave(interaction)
        interaction.reply({embeds: [new EmbedBuilder()
            .setColor(style.color)
            .setDescription(`${style.disconnect} Disconnected from the voice channel`)]})

                         
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