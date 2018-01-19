'use strict'

const Schema = use('Schema')

class TagsSchema extends Schema {
  up () {
    this.create('tags', (table) => {
      table.increments()
      table.text('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('tags')
  }
}

module.exports = TagsSchema
