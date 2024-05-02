import Event from '#events/models/event'
import Task from '#tasks/models/task'
import type { HttpContext } from '@adonisjs/core/http'

export default class ShowEventController {
  async handle({ inertia, params }: HttpContext) {
    const event = await Event.findOrFail(params.id)
    const tasks = await Task.query().where('event_id', event.id)

    return inertia.render('events/show', { event, tasks })
  }
}
