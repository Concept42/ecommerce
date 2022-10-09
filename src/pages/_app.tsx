import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/ui/Navigation'
import { withTRPC } from '@trpc/next'
import type { AppRouter } from '../Server/router/app.router'
import superjson from 'superjson'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Navigation />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc'
    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            'x-ssr': '1',
          }
        }
        return {}
      },
      url,
      transformer: superjson,
    }
  },
})(MyApp)
