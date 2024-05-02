import type { HttpContext } from '@adonisjs/core/http'

export default class StreamController {
  async index({ inertia }: HttpContext) {
    return inertia.render('stream')
  }
}
