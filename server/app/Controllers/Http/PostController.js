'use strict'

const Database = use('Database')
const Post = use('App/Models/Post')

class PostController {

  async index () {
    return await Database
      .from('posts')
      .paginate(3, 20)
  }
}

module.exports = PostController
