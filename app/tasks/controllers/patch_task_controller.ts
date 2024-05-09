import Task from '#tasks/models/task'
import type { HttpContext } from '@adonisjs/core/http'

export default class PatchTaskController {
  async handle({ request, response }: HttpContext) {
    const { newOrder } = request.body()

    for (const [i, element] of newOrder.entries()) {
      const task = await Task.findOrFail(element.id)
      if (task) {
        task.order = i
        await task.save()
      }
    }

    return response.redirect().back()
  }
}
