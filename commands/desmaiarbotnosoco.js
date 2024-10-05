const { clearList } = require('../utils/manageList');

module.exports = {
    name: 'desmaiarbotnosoco',
    execute(message) {
        clearList();
        message.channel.send('A lista de confirmados foi limpa.');
    },
};