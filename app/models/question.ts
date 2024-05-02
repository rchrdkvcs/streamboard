import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'

export default class Question extends BaseModel {
  @beforeCreate()
  static generateUUID(model: Question) {
    model.id = randomUUID()
  }

  @column({ isPrimary: true })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare label: string

  @column()
  declare answer: string

  @column()
  declare media: string | null

  @column()
  declare event_id: string
}
