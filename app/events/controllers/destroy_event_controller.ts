import Event from '#events/models/event'
import type { HttpContext } from '@adonisjs/core/http'

export default class DestroyEventController {
  async handle({ response, request }: HttpContext) {
    const eventId = request.body().eventId

    const event = await Event.findOrFail(eventId)

    await event.delete()

    return response.redirect().back()
  }
}
