import Task from '#tasks/models/task'
import type { HttpContext } from '@adonisjs/core/http'
import transmit from '@adonisjs/transmit/services/main'

export default class ShowGamemasterController {
  async handle({ request, inertia, params }: HttpContext) {
    const pageNumber = request.qs().page
    const eventId = await params.id

    const data = await Task.query().where('event_id', eventId).paginate(pageNumber, 1)

    const task = data.toJSON().data[0]
    const meta = data.toJSON().meta

    transmit.broadcast('stream/task', { task })

    return inertia.render('gamemaster/show', { data: task, meta, eventId })
  }
}
