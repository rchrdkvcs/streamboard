import Event from '#models/event'
import type { HttpContext } from '@adonisjs/core/http'

export default class StoreEventController {
  async execute({ request, response }: HttpContext) {
    const { title } = request.body()
    const event = await Event.create({ title })

    return response.redirect(`/dashboard/${event.id}/question`)
  }
}
