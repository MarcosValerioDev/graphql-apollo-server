const { GraphQLScalarType, Kind } = require('graphql')

module.exports = new GraphQLScalarType({
    name: 'Date',
    description: 'Date in ISO 8601 format',
    serialize(value) {
        return new Date(value).toISOString()
    },
    parseValue(value) {
        return new Date(value)
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING || ast.kind === Kind.INT) return new Date(ast.value)
        return null
    }
})
