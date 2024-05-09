import Task from '#tasks/models/task'
import type { HttpContext } from '@adonisjs/core/http'

export default class PutGamemasterController {
  async handle({ request, response }: HttpContext) {
    const { visibility, taskId } = request.body()

    await Task.query().where('id', taskId).update({ answerVisibility: visibility })

    return response.redirect().withQs().back()
  }
}
