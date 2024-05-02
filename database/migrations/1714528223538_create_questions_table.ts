import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'questions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id')

      table.uuid('event_id').notNullable().references('events.id').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.string('label')
      table.string('answer')
      table.text('media').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
