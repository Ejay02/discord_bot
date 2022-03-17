const Discord = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  async execute(member) {
    // member.guild.channels.cache.get('953144033356701699').send(`${member.user} has joined the server!`)

    console.log(member.user);

    const newMemberEmbed = new Discord.MessageEmbed()
      .setColor("#FFCB74")
      .setTitle("Mew Member!")
      .setDescription(
        `${member.user} has joined the server! 🕺🏽😁<br/>  We hope you enjoy your stay!`
      )
      .setThumbnail(member.user.displayAvatarURL())
      .setTimestamp();

    member.guild.channels.cache.get("953144033356701699").send({
      embeds: [newMemberEmbed],
    });
  },
};
