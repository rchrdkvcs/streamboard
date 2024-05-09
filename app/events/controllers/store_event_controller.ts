import Event from '#events/models/event'
import type { HttpContext } from '@adonisjs/core/http'

export default class StoreEventController {
  async handle({ inertia, request }: HttpContext) {
    const { title } = request.body()
    const event = await Event.create({ title })

    return inertia.location(`/event/${event.id}`)
  }
}
