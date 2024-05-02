import Question from '#models/question'
import { BaseModel, beforeCreate, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'

export default class Event extends BaseModel {
  @beforeCreate()
  static generateUUID(model: Event) {
    model.id = randomUUID()
  }

  @column({ isPrimary: true })
  declare id: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare title: string

  @column()
  declare isActive: boolean

  @hasMany(() => Question)
  declare questions: HasMany<typeof Question>
}
