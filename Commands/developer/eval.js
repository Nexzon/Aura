const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const ner = ['714821119080923177','714821119080923177','714821119080923177']
const client = require(`${process.cwd()}/index.js`)
const style = require(`${process.cwd()}/style/embed.json`)
module.exports = {
  data: new SlashCommandBuilder()
    .setName("eval")
    .setDescription("Eval code")
.addStringOption(option =>
		option.setName('code')
			.setDescription('The code to eval')
			.setRequired(true))
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  /**
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {
      if(ner.includes(interaction.member.id) === true) {
          
(async() => {
      const start = Date.now(), // start time
            {author, member, guild, channel, mentions} = interaction,
            {me} = guild,
            {app, user: bot} = client; // per-defined vars for eaasy access
        let _evaled;
        try {
            _evaled = eval(interaction.options.getString('code')); // try to eval
        } catch (err) {
            _evaled = err; // show error if fail
        }
        const evaled = (typeof _evaled === 'object' ? require('util').inspect(_evaled, {depth: 100, getters: true}) : _evaled) + ''; // stringify
        return await interaction.reply({
            embeds: [{
                title: 'Evaluated',
                description: `\`\`\`ts\n${evaled.slice(0, 4e3)}\`\`\``, // put result in codeblock, and crop it
                footer: { text: `Took ${Date.now() - start}ms` }
            }]
        })})()
          }
      else {
    interaction.reply({ content: "You can not use this command", ephermal: true })
    }
     
          
        },
};