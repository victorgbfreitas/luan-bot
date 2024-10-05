const { addToList } = require('../utils/manageList');

module.exports = {
    customId: 'confirm',
    async execute(interaction) {
        const user = interaction.user;
        addToList(user);
        await interaction.reply({
            content: 'Você foi adicionado à lista de confirmados!',
            ephemeral: true,
        });
    },
};