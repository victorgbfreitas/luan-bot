const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { addToList } = require('../utils/manageList');

module.exports = {
    name: 'lolzinho',
    async execute(message, client) {
        const user = message.author;

        addToList(user);

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('confirm')
                    .setLabel('Sim')
                    .setStyle(ButtonStyle.Success),
            );

        await message.channel.send({
            content: `@everyone ${user} disse que vai ter lolzinho!`,
            components: [row],
        });

        const privateRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('cancel')
                    .setLabel('Cancelar confirmação')
                    .setStyle(ButtonStyle.Danger),
            );

        await user.send({
            content: 'Para cancelar sua confirmação, clique aqui:',
            components: [privateRow],
        });
    },
};