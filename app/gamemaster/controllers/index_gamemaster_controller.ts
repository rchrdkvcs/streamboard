import Event from '#events/models/event'
import type { HttpContext } from '@adonisjs/core/http'

export default class IndexGamemasterController {
  async handle({ inertia }: HttpContext) {
    const events = await Event.all()

    return inertia.render('gamemaster/index', { events })
  }
}
