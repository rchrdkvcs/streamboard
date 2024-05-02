import Event from '#models/event'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ShareDataMiddleware {
  async handle({ inertia }: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    const events = await Event.all()
    inertia.share({ events })

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}
