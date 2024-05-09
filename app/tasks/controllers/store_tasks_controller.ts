import Task from '#tasks/models/task'
import type { HttpContext } from '@adonisjs/core/http'

export default class StoreTaskController {
  async handle({ request, inertia }: HttpContext) {
    const { label, answer, media, eventId } = request.body()
    await Task.create({ label, answer, media, event_id: eventId })

    return inertia.location(`/event/${eventId}`)
  }
}
