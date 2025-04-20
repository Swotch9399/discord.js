const { REST, Routes, ActivityType } = require('discord.js');
const fs = require('fs');
const config = require('../config.json');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.tag} Online!`);

        client.user.setPresence({
            status: config.status,
            activities: [{
                name: config.activity.name,
                type: ActivityType[config.activity.type]
            }],
        });

        const commands = [];
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            commands.push(command.data.toJSON());
        }

        const rest = new REST({ version: '10' }).setToken(config.token);
        (async () => {
            try {
                await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
                console.log('Successfully loadded application [/] commands.');
            } catch (error) {
                console.error("Failed to load application [/] commands. " + error);
            }
        })();
    },
};