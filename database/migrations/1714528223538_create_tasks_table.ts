import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('label')
      table.string('answer')
      table.text('media').nullable()
      table.boolean('answer_visibility').defaultTo(false)
      table.integer('order').defaultTo(0)

      table.uuid('event_id').notNullable().references('events.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
