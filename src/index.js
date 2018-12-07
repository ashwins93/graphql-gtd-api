import { GraphQLServer } from 'graphql-yoga'

import data from './dummyData'

const { projects, actions, contexts } = data

const typeDefs = `
  type Query {
    projects: [Project!]!
    actions: [Action!]!
  }

  type Project {
    id: ID!
    description: String!
    completed: Boolean!
  }

  type Action {
    id: ID!
    description: String!
    completed: Boolean!
  }
`

const resolvers = {
  Query: {
    projects(parent, args, ctx, info) {
      return projects
    },
    actions(parent, args, ctx, info) {
      return actions
    },
  },
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start().then(() => {
  console.log('Server is up and running 🏃‍')
})
