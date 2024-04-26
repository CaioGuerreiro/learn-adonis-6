import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'crew_movies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('cineast_id').unsigned().references('id').inTable('cineast').notNullable()
      table.integer('movie_id').unsigned().references('id').inTable('movies').notNullable()
      table.string('tittle', 100).notNullable().defaultTo('')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}