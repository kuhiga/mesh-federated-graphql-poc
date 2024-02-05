import { Resolvers } from './.mesh'

const resolvers: Resolvers = {
  Store: {
    bookSells: {
      selectionSet: /* GraphQL */`
      {
        id
      }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Stores.Query.bookSells({
          root,
          args: {
            storeId: root.id
          },
          context,
          info
        })
      }
    }
  }
}

export default resolvers
