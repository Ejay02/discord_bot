const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong bitches!!"),

  async execute(interaction) {
    interaction.reply({
      content: "Pong bitches!!",
      ephemeral: true,
    });
  },
};
