import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { createRouter } from '../createRouter'
import * as trpc from '@trpc/server'

export const productRouter = createRouter().query('getProducts', {
  async resolve({ ctx }) {
    const products = await ctx.prisma.product.findMany()
    return products
  },
})
// .mutation('addNewUser', {
//   input: userYup,
//   async resolve({ ctx, input }) {
//     const { name, email, role, password } = input
//     try {
//       const user = await ctx.prisma.user.create({
//         data: {
//           name,
//           email,
//           role,
//           password,
//         },
//       })
//       return user
//     } catch (error) {
//       if (error instanceof PrismaClientKnownRequestError) {
//         if (error.code === 'P2002') {
//           throw new trpc.TRPCError({
//             code: 'CONFLICT',
//             message: 'User with that email already exists',
//           })
//         }
//       }
//       throw new trpc.TRPCError({
//         code: 'INTERNAL_SERVER_ERROR',
//         message: 'Something went wrong',
//       })
//     }
//   },
// })
