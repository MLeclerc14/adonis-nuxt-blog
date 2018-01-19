'use strict'

const Schema = use('Schema')

class CategoryPostSchema extends Schema {
  up () {
    this.create('category_posts', (table) => {
      table.increments()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.integer('post_id').unsigned().references('id').inTable('posts')
    })
  }

  down () {
    this.drop('category_posts')
  }
}

module.exports = CategoryPostSchema
