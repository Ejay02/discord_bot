const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Echos you back 👻")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to echo")
        .setRequired(true)
    ),

  async execute(interaction) {
    interaction.reply({
      content: interaction.options.getString("message"),
      ephemeral: true,
    });
  },
};
