import Task from '#tasks/models/task'
import type { HttpContext } from '@adonisjs/core/http'
import transmit from '@adonisjs/transmit/services/main'
export default class ShowGamemasterController {
  async handle({ request, inertia, params }: HttpContext) {
    const pageNumber = request.qs().page
    const eventId = params.id

    const tasks = await Task.query()
      .where('event_id', eventId)
      .orderBy('order', 'asc')
      .paginate(pageNumber, 1)

    const qst = tasks.toJSON().data[0]
    const meta = tasks.getMeta()

    transmit.broadcast('stream/task', { qst })

    return inertia.render('gamemaster/show', { qst, meta, eventId })
  }
}
