const usuarios = [{
        id: 1,
        nome: "Marcos Valéiro",
        email: "user@gmail.com",
        idade: 29,
        perfil_id: 1
    },
    {
        id: 2,
        nome: "Teste User",
        email: "userTeste@gmail.com",
        idade: 30,
        perfil_id: 1
    },
    {
        id: 3,
        nome: "Teste User3",
        email: "userTeste3@gmail.com",
        idade: 3,
        perfil_id: 2
    },
    {
        id: 4,
        nome: "Teste User4",
        email: "userTeste4@gmail.com",
        idade: 4,
        perfil_id: 3
    }
]

const perfil = [{
        id: 1,
        nome: "Adminstrador"
    },
    {
        id: 2,
        nome: "User"
    },
    {
        id: 3,
        nome: "Teste"
    }
]

module.exports = {
    usuarios,
    perfil
}