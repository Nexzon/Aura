const {   SlashCommandBuilder,   ChatInputCommandInteraction,   PermissionFlagsBits, EmbedBuilder, PermissionsBitField, ChannelType} = require("discord.js"); 
const style = require(`${process.cwd()}/style/embed.json`)
  const { QuickDB } = require('quick.db');
const db = new QuickDB();
const fil = 'reverse'

module.exports = {
        data: new SlashCommandBuilder()
            .setName(`reverse`)
            .setDescription(`Enable the filter reverse`)
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

   
        /**
         * @param {CommandInteraction} interaction
         */
        async execute(interaction, client) {

            try {
            if(interaction.guild.members.me.permissions.has([PermissionsBitField.Flags.Speak]) === false) {
                interaction.reply({embeds: [new EmbedBuilder()
         .setColor(style.color)
       .setAuthor({name: style.errorText, iconURL: style.errorImg})
         .setDescription(`${style.error} I am missing the **\`SPEAK\`** permission`)]})
         } else {
            if(interaction.guild.members.me.permissions.has([PermissionsBitField.Flags.Connect]) === false) {
                interaction.reply({embeds: [new EmbedBuilder()
         .setColor(style.color)
       .setAuthor({name: style.errorText, iconURL: style.errorImg})
         .setDescription(`${style.error} I am missing the **\`CONNECT\`** permission`)]})
         } else {
                        
                    const queue = client.distube.getQueue(interaction)
                    let voiceChannel = interaction.member.voice.channel
                    
                    if(!queue) return interaction.reply({embeds: [new EmbedBuilder()
                        .setColor(style.errorColor)
                        .setTitle("An error occured")
                        .setDescription(`${style.error} The queue is empty`)], ephemeral: true})

                    if(!voiceChannel) return interaction.reply({embeds: [new EmbedBuilder()
                        .setColor(style.errorColor)
                        .setTitle("An error occured")
                        .setDescription(`${style.error} You are not connected to a voice channel`)], ephemeral: true})

                        queue.filters.set([fil]);

                   
                    interaction.reply({embeds: [new EmbedBuilder()
                        .setColor(style.color)
                        .setDescription(`${style.loop} Filter has been set to **${fil}**`)]})

                    }
         }
                    } catch(error) {
                        interaction.reply({embeds: [new EmbedBuilder()
                            .setColor(style.errorColor)
                            .setTitle("An error occured")
                            .setDescription(`${style.error} I could probaly not be in a voice channel 
                            
                            **Logged error**
                            \`\`\`js
                            ${error}\`\`\``)], ephemeral: true})
                            console.log(error)
                    }

            }
        }
