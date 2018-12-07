const data = {
  projects: [
    {
      id: 1,
      description: 'Master advanced GraphQL',
      completed: false,
    },
    {
      id: 2,
      description: 'Prepare for presentation about React Hooks',
      completed: false,
    },
    {
      id: 3,
      description: 'Apply for open positions',
      completed: false,
    },
  ],
  actions: [
    {
      id: 1,
      description: 'Learn GraphQL basics - types and schemas',
      completed: false,
      project: 1,
    },
    {
      id: 2,
      description: 'Learn about Query, Mutations and Subscriptions',
      completed: false,
      project: 1,
    },
    {
      id: 3,
      description: 'Learn about client-side GraphQL',
      completed: false,
      project: 1,
    },
    {
      id: 4,
      description: 'Read the React Hooks proposal',
      completed: true,
      project: 2,
    },
    {
      id: 5,
      description: 'Build an app that demonstrates the use of React Hooks',
      completed: false,
      project: 2,
    },
    {
      id: 6,
      description:
        'Identify short term goals, analyse strengths and weaknesses',
      completed: false,
      project: 3,
    },
    {
      id: 7,
      description: 'Look at open positions and list down the requirements',
      completed: false,
      project: 3,
    },
    {
      id: 8,
      description: 'Prepare a portfolio and apply for the desired position',
      completed: false,
      project: 3,
    },
  ],
  contexts: [
    {
      id: 1,
      description: 'At home',
    },
    {
      id: 2,
      description: 'Flex time',
    },
    {
      id: 3,
      description: 'Online',
    },
    {
      id: 4,
      description: 'Working',
    },
  ],
  actions_contexts: [
    {
      id: 1,
      action: 1,
      context: 1,
    },
    {
      id: 2,
      action: 1,
      context: 2,
    },
    {
      id: 3,
      action: 2,
      context: 1,
    },
    {
      id: 4,
      action: 2,
      context: 2,
    },
    {
      id: 5,
      action: 3,
      context: 1,
    },
    {
      id: 6,
      action: 3,
      context: 2,
    },
  ],
}
