'use strict'

const Schema = use('Schema')

class SubscribersSchema extends Schema {
  up () {
    this.create('subscribers', (table) => {
      table.increments()
      table.string('email')
      table.text('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('subscribers')
  }
}

module.exports = SubscribersSchema
