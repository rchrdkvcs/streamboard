import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'

export default class Task extends BaseModel {
  @beforeCreate()
  static generateUUID(model: Task) {
    model.id = randomUUID()
  }

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare label: string

  @column()
  declare answer: string

  @column()
  declare media: string | null

  @column()
  declare event_id: string
}
