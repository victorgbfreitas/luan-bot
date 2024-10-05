let confirmedUsers = [];

function addToList(user) {
    if (!confirmedUsers.includes(user)) {
        confirmedUsers.push(user);
    }
}

function removeFromList(user) {
    confirmedUsers = confirmedUsers.filter(u => u.id !== user.id);
}

function clearList() {
    confirmedUsers = [];
}

function getList() {
    return confirmedUsers;
}

module.exports = { addToList, removeFromList, clearList, getList };