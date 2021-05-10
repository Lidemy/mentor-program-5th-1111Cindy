// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
const request = require('request')

request('https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    if (error) {
      console.log('錯誤', error)
      return
    }
    let books = ''
    try {
      books = JSON.parse(body)
    } catch (err) {
      console.log('錯誤', err)
    }

    for (let i = 0; i < books.length; i++) {
      console.log(`${books[i].id} ${books[i].name}`)
    }
  })
