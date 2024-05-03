import type { HttpContext } from '@adonisjs/core/http'

export default class IndexStreamController {
  handle({ inertia }: HttpContext) {
    return inertia.render('stream')
  }
}
