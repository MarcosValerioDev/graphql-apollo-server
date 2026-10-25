const { users } = require('../mockDb/mockdb')

module.exports = {
    createUser(_, { name, email, age, profileId }) {
        const nextId = Math.max(0, ...users.map(u => u.id)) + 1
        const user = {
            id: nextId,
            name,
            email,
            age,
            profileId
        }
        users.push(user)
        return user
    }
}
