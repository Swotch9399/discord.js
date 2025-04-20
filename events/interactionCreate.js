module.exports = {
    name: 'interactionCreate',
    execute(interaction, client) {
        if (!interaction.isCommand()) return;

        const command = require(`../commands/${interaction.commandName}.js`);
        try {
            command.execute(interaction, client);
        } catch (error) {
            console.error(error);
            interaction.reply({ content: 'An error occurred while running the command.', ephemeral: true });
        }
    },
};