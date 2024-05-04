import Task from '#tasks/models/task'
import type { HttpContext } from '@adonisjs/core/http'

export default class DestroyTaskController {
  async handle({ request, response }: HttpContext) {
    const { id } = request.body()

    const task = await Task.findOrFail(id)
    await task.delete()

    return response.redirect().back()
  }
}
