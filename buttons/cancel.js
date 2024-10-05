const { removeFromList } = require('../utils/manageList');

module.exports = {
    customId: 'cancel',
    async execute(interaction) {
        const user = interaction.user;
        removeFromList(user);
        await interaction.reply({
            content: 'Sua confirmação foi cancelada.',
            ephemeral: true,
        });
    },
};