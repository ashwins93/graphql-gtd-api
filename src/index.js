import { GraphQLServer } from 'graphql-yoga'

import data from './dummyData'

const { projects, actions, contexts } = data

const typeDefs = `
  type Query {
    projects: [Project!]!
    actions: [Action!]!
    project(id: ID!): Project
  }

  type Project {
    id: ID!
    description: String!
    completed: Boolean!
    actions: [Action!]!
  }

  type Action {
    id: ID!
    description: String!
    completed: Boolean!
    project: Project!
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
    project(parent, args, ctx, info) {
      return projects.find(project => project.id === Number(args.id)) || null
    },
  },
  Project: {
    actions(parent, args, ctx, info) {
      return actions.filter(action => action.project === parent.id)
    },
  },
  Action: {
    project(parent, args, ctx, info) {
      return projects.find(project => project.id === parent.project)
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
