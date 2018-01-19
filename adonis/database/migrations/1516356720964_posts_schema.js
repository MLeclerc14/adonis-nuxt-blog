'use strict'

const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.text('title').notNullable()
      table.text('summary')
      table.text('description')
      table.datetime('from_date')
      table.datetime('to_date')
      table.integer('author_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
