const { profiles } = require('../mockDb/mockdb')

module.exports = {
    salary(user) {
        return user.baseSalary != null ? user.baseSalary + 1000.00 : null;
    },
    profile(user) {
        return profiles.find(p => p.id === user.profileId) || null
    }
}
