import Question from '#models/question'
import type { HttpContext } from '@adonisjs/core/http'

export default class StoreQstController {
  async execute({ request }: HttpContext) {
    const { label, answer, media, eventId } = request.body()

    await Question.create({ label, answer, media, event_id: eventId })

    return
  }
}
