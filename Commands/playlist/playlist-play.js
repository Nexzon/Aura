const {   SlashCommandBuilder,   ChatInputCommandInteraction,   PermissionFlagsBits, EmbedBuilder, PermissionsBitField } = require("discord.js"); 
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const style = require(`${process.cwd()}/style/embed.json`)
const discord = require('discord.js');
const Discord = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist-play")
    .setDescription("Play a playlist")
    .addStringOption(option => option.setName('playlist').setRequired(true).setDescription('The playlist name'))
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),
                           /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    try {
        const playlist = interaction.options.getString('playlist')
        const track = await db.get(`playlist_${interaction.member.id}.${playlist}`) || ['never gonna give you up']
            
            
        for (let i = 0; i < track.length; i++) {
            const queue = client.distube.getQueue(interaction)
                               await client.distube.play(interaction.member.voice.channel, track[i], {
                                   member: interaction.member,
                                   textChannel: interaction.channel,
                                   interaction
                               });
                                  console.log(track[i])
        }              
                         
                        } catch(error) {
                            interaction.reply({embeds: [new EmbedBuilder()
                                .setColor(style.errorColor)
                                .setTitle("An error occured")
                                .setDescription(`${style.error} Values could be empty, as a result the command not working
                                
                                **Logged error**
                                \`\`\`js
                                ${error}\`\`\``)], ephemeral: true})
                                console.log(error)
                        }


                    }
                }