import Task from '#tasks/models/task'
import type { HttpContext } from '@adonisjs/core/http'
import transmit from '@adonisjs/transmit/services/main'

export default class ShowGamemasterController {
  async handle({ inertia, params }: HttpContext) {
    const tasks = await Task.query().where('event_id', params.id).paginate(params.page, 1)

    const data = tasks.toJSON().data[0]
    const meta = tasks.getMeta()

    transmit.broadcast('currentTask', { data, meta })

    return inertia.render('gamemaster/show', { data, meta })
  }
}
