const fs = require('fs')
const path = require('path')
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const resolvers = require('./resolvers')

const schemasDir = path.join(__dirname, 'schemas')
const typeDefs = fs.readdirSync(schemasDir)
    .filter(file => file.endsWith('.graphql'))
    .map(file => fs.readFileSync(path.join(schemasDir, file), 'utf8'))

const server = new ApolloServer({
    typeDefs,
    resolvers
})

startStandaloneServer(server, { listen: { port: process.env.PORT || 4000 } })
    .then(({ url }) => {
        console.log(`Server ready at ${url}`)
    })
