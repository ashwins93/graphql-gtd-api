import { GraphQLServer } from 'graphql-yoga'

import data from './dummyData'

const { projects, actions, contexts, actions_contexts } = data

const typeDefs = `
  type Query {
    projects: [Project!]!
    actions: [Action!]!
    contexts: [Context!]!
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
    contexts: [Context!]!
  }

  type Context {
    id: ID!
    description: String!
    actions: [Action!]!
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
    contexts(parent, args, ctx, info) {
      return contexts
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
    contexts(parent, args, ctx, info) {
      return actions_contexts
        .filter(ac => ac.action === parent.id)
        .map(ac => contexts.find(context => context.id === ac.context))
    },
  },
  Context: {
    actions(parent, args, ctx, info) {
      return actions_contexts
        .filter(ac => ac.context === parent.id)
        .map(ac => actions.find(action => action.id === ac.action))
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
