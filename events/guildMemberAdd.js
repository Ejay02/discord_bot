const Discord = require("discord.js");
const GuildSettings = require("../models/GuildSettings");

module.exports = {
  name: "guildMemberAdd",
  async execute(member) {
    // member.guild.channels.cache.get('953144033356701699').send(`${member.user} has joined the server!`)

    console.log(member.user);
    const guildSettings = await GuildSettings.findOne({
      guild_id: member.guild.id,
    });

    if (!guildSettings && !guildSettings.welcome_channel_id) {
      return;
    }
    const newMemberEmbed = new Discord.MessageEmbed()
      .setColor("#FFCB74")
      .setTitle("Mew Member!")
      .setDescription(
        `${member.user} has joined the server! 🕺🏽😁 We hope you enjoy your stay!`
      )
      .setThumbnail(member.user.displayAvatarURL())
      .setTimestamp();

    member.guild.channels.cache.get(guildSettings.welcome_channel_id).send({
      embeds: [newMemberEmbed],
    });
  },
};
