import { createRouter } from '../createRouter'
import { productRouter } from './productRouter'
export const appRouter = createRouter().merge('product.', productRouter)

export type AppRouter = typeof appRouter
