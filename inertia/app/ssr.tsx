import { createInertiaApp } from '@inertiajs/react'
import { ReactNode } from 'react'
import ReactDOMServer from 'react-dom/server'
import DefaultLayout from '~/layout/default'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve(name) {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      const page = pages[`../pages/${name}.tsx`]

      // @ts-expect-error - Page is not typed
      page.default.layout =
        // @ts-expect-error - Page is not typed
        page.default.layout || ((p: ReactNode) => <DefaultLayout children={p} />)

      return page
    },
    setup: ({ App, props }) => <App {...props} />,
  })
}
