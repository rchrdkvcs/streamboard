import type { HttpContext } from '@adonisjs/core/http'
import transmit from '@adonisjs/transmit/services/main'

export default class StoreGamemasterController {
  async handle({ request, response }: HttpContext) {
    const { showAnswer } = request.body()

    transmit.broadcast('stream/answer', { showAnswer })

    return response.redirect().back()
  }
}
