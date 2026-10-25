const { users } = require('../mockDb/mockdb')

module.exports = {
    hello() {
        return "Hello"
    },
    currentTime() {
        return `${new Date}`
    },
    currentDate() {
        return new Date
    },
    loggedUser() {
        return {
            id: 1,
            name: "Marcos",
            email: "marcos@gmail.com",
            age: 30,
            baseSalary: 5000.00,
            vip: true
        }
    },
    productOnSale() {
        return {
            name: "Prod1",
            price: 150.50,
            discount: 0
        }
    },
    users() {
        return users
    },
    user(_, { id }) {
        return users.find(u => u.id === id) || null
    }
}
