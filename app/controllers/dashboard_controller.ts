import type { HttpContext } from '@adonisjs/core/http'
import Event from '../event/models/event.js'
import Question from '../task/models/task.js'

export default class DashboardController {
  async index({ inertia }: HttpContext) {
    const events = await Event.all()

    return inertia.render('dashboard/index', { events })
  }

  async question({ inertia, params }: HttpContext) {
    const events = await Event.all()

    const questions = await Question.findManyBy('event_id', params.id)

    return inertia.render('dashboard/question', { events, questions, id: params.id })
  }

  async game({ inertia, params }: HttpContext) {
    const events = await Event.all()

    const event = await Event.findByOrFail('id', params.id)

    const questions = await Question.findManyBy('event_id', params.id)

    return inertia.render('dashboard/game', { events, event, questions, id: params.id })
  }

  async stream({ inertia, params }: HttpContext) {
    const id = params.id
    return inertia.render('dashboard/stream', { id })
  }
}
