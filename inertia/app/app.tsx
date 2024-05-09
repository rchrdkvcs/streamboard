/// <reference path="../../adonisrc.ts" />

import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/react'
import { ReactNode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import DefaultLayout from '~/layout/default'
import '../css/app.css'

createInertiaApp({
  progress: { color: '#53fc18' },

  title: (title) => `${title}`,

  async resolve(name) {
    const page = await resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob('../pages/**/*.tsx')
    )

    // @ts-expect-error - Page is not typed
    page.default.layout = page.default.layout || ((p: ReactNode) => <DefaultLayout children={p} />)

    return page
  },

  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
})
