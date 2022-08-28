const {   SlashCommandBuilder,   ChatInputCommandInteraction,   PermissionFlagsBits, EmbedBuilder, PermissionsBitField } = require("discord.js"); 
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const style = require(`${process.cwd()}/style/embed.json`)
const discord = require('discord.js');
const Discord = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist-view")
    .setDescription("View a playlist content")
			 .addStringOption(option => option.setName('playlist').setRequired(true).setDescription('The playlist'))
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

                           /**
   * @param {CommandInteraction} interaction
   */
  async execute(interaction, client) {
    try {
        const playlist = interaction.options.getString('playlist')
let aa = await db.get(`playlist_${interaction.member.id}.${playlist}`)
    
    
    

interaction.reply({embeds: [new EmbedBuilder()
.setColor(style.color)
.setDescription(`**${aa.join("**, **")}**`)]})
                         
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