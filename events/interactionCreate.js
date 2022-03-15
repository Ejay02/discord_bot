module.exports = {
  name: "interactionCreate",
  once: true,
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (e) {
      if (e) console.error(e);

      await interaction.reply({
        content: "An error occured while executing the command.",
        ephemeral: true,
      });
    }
  },
};
