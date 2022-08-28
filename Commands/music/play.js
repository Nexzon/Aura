const {   SlashCommandBuilder,   ChatInputCommandInteraction,   PermissionFlagsBits, EmbedBuilder, PermissionsBitField, ChannelType} = require("discord.js"); 
const style = require(`${process.cwd()}/style/embed.json`)
  const { QuickDB } = require('quick.db');
const db = new QuickDB();


module.exports = {
        data: new SlashCommandBuilder()
            .setName("play")
            .setDescription("Play a song")
            .addStringOption(option => option.setName('track').setRequired(true).setDescription('The track to play'))
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

   
        /**
         * @param {CommandInteraction} interaction
         */
        async execute(interaction, client) {

  

                    let track = interaction.options.getString('track')
                    const queue = client.distube.getQueue(interaction)
                    let voiceChannel = interaction.member.voice.channel

                    if(!voiceChannel) return  interaction.reply({embeds: [new EmbedBuilder()
                        .setColor(style.errorColor)
                        .setTitle("An error occured")
                        .setDescription(`${style.error} You are not connected to a voice channel`)], ephemeral: true})

                    client.distube.play(interaction.member.voice.channel, track, {
                        member: interaction.member,
                        textChannel: interaction.channel,
                        interaction
                    });
                    interaction.reply({content:"Track added to queue", ephemeral: true})

                

            }
        }
