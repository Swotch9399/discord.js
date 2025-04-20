const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const config = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('swotch')
        .setDescription('Swotch'),
    async execute(interaction, client) {
        const botAvatar = client.user.displayAvatarURL({ format: 'png', dynamic: true })
        const embed = new EmbedBuilder()
            .setAuthor({
                name: "Swotch.js",
                url: "https://swotch.vercel.app/",
                iconURL: botAvatar,
            })
            .setTitle("Hi, I'm Swotch.")
            .setDescription("**</>**  __Full-Stack__ Developer\n**</>**  __.NET__ Developer\n**</>**  __Expert__ Developer\n**</>**  __PolyGlot__ Developer")
            .addFields(
                { name: "", value: "Hello, I'm Swotch, I'm 17 years old, I live in Turkey and I'm a high school student. I am passionate about programming. Those who want to reach me can look at the contact section of my website.", },
              )
            .setColor("#000001")
            .setFooter({
                text: "Swotch 💛 JavaScript",
            })
            .setTimestamp();

        const buttonRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('Website')
                    .setStyle(ButtonStyle.Link)
                    .setURL('https://swotch.vercel.app/')
            );

        await interaction.reply({ embeds: [embed], components: [buttonRow], ephemeral: true });
    },
};