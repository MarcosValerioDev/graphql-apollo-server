const { usuarios, perfil } = require('../mockDb/mockdb')
i_d = 20;

module.exports = {
    novoUsuarios(_, { nome, email, idade, perfil_id }) {

        user = {
            id: 0,
            nome,
            email,
            idade,

            perfil_id
        }
        usuarios.push(user)
        return user
    },
    user(_, { nome, email }) {
        const user = {
            nome,
            email
        }
        return user;
    }
}