const {   SlashCommandBuilder,   ChatInputCommandInteraction,   PermissionFlagsBits, EmbedBuilder, PermissionsBitField } = require("discord.js"); 
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const style = require(`${process.cwd()}/style/embed.json`)
const discord = require('discord.js');
const Discord = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist-create")
    .setDescription("Create a playlist")
    .addStringOption(option => option.setName('name').setRequired(true).setDescription('The playlist name'))
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

                           /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    try {
        let name = interaction.options.getString('name')
        if(!await db.get(`playlist_${interaction.member.id}.${name}`)) {
              await db.push(`playlist_${interaction.member.id}.${name}`, 'lol')
            await db.pull(`playlist_${interaction.member.id}.${name}`, 'lol')
                await interaction.reply({embeds: [new EmbedBuilder()
                .setColor(style.color)
                .setDescription(`${style.check} Playlist has been created as \`${name}\``)]})
              
          } else {
            interaction.reply({content: 'Playlist already exists', ephemeral: true})
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