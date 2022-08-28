const {   SlashCommandBuilder,   ChatInputCommandInteraction,   PermissionFlagsBits, EmbedBuilder, PermissionsBitField } = require("discord.js"); 
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const style = require(`${process.cwd()}/style/embed.json`)
const discord = require('discord.js');
const Discord = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist-add")
    .setDescription("Add a song to the playlist")
			 .addStringOption(option => option.setName('track').setRequired(true).setDescription('The track you want to add'))
                         .addStringOption(option => option.setName('playlist').setRequired(true).setDescription('The playlist to add the track to'))
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

                           /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    try {
        let track = interaction.options.getString('track')
        let playlist = interaction.options.getString('playlist')
         let exists = await db.get(`playlist_${interaction.member.id}.${playlist}`)
                                if(await db.get(`playlist_${interaction.member.id}.${playlist}`) === null || await db.get(`playlist_${interaction.member.id}.${playlist}`) === undefined) { interaction.reply({content: 'Playlist does not exist', ephemeral: true})
                         } else {
                             console.log(await db.get(`playlist_${interaction.member.id}.${playlist}`))
  	await db.push(`playlist_${interaction.member.id}.${playlist}`, track)
        await interaction.reply({embeds: [new EmbedBuilder()
        .setColor(style.color)
        .setDescription(`${style.check} Track has been added to the playlist \`${playlist}\``)]})
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