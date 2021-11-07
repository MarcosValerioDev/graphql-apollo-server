const { usuarios, perfil } = require('../mockDb/mockdb')

module.exports = {
    Ola() {
        return "Ola"
    },
    HoraAtual() {
        return `${new Date}`
    },
    HoraAtualEscalar() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: "Marcos",
            email: "marcos@gmail.com",
            idade: 30,
            salarioReal: 5000.00,
            vip: true
        }
    },
    ProdutoVenda() {
        return {
            nome: "Prod1",
            preco: 150.50,
            desconto: 0
        }
    },
    Usuarios() {
        return usuarios
    },
    GetUsurario(_, { id }) {
        const selecionados = usuarios
            .filter(u => u.id === id)
        return selecionados ? selecionados[0] : null;
    }
}