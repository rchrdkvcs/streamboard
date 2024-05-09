import Task from '#tasks/models/task'
import { BaseModel, beforeCreate, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { randomUUID } from 'node:crypto'

export default class Event extends BaseModel {
  @beforeCreate()
  static generateUUID(model: Event) {
    model.id = randomUUID()
  }

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare title: string

  @column()
  declare isActive: boolean

  @hasMany(() => Task)
  declare tasks: HasMany<typeof Task>
}
