'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

Factory.blueprint('App/Models/Post', async (faker) => {
  return {
    title: faker.word(),
    summary: faker.sentence(),
    description: faker.paragraph(),
    from_date: faker.date(),
    to_date: faker.date(),
    author_id: 1
  }
})
