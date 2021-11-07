const { ApolloServer } = require("apollo-server")
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')


const server = new ApolloServer({
    typeDefs: importSchema("./schemas/index.graphql"),
    resolvers
})

server.listen(4000).then(({ url }) => {
    console.log(`Servidor connectado em ${url}`)
})