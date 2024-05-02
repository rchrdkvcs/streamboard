import type { HttpContext } from '@adonisjs/core/http'
import Question from '../../task/models/task.js'

export default class StoreQstController {
  async execute({ request }: HttpContext) {
    const { label, answer, media, eventId } = request.body()

    await Question.create({ label, answer, media, event_id: eventId })

    return
  }
}
