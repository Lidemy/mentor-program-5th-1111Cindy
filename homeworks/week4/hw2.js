// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
const request = require('request')
const process = require('process')

const URL = 'https://lidemy-book-store.herokuapp.com/books'
const order = process.argv[2]

if (order === 'list') {
  listBook()
} else if (order === 'read') {
  readBook(process.argv[3])
} else if (order === 'delete') {
  deleteBook(process.argv[3])
} else if (order === 'create') {
  createBook(process.argv[3])
} else if (order === 'update') {
  updateBook(process.argv[3], process.argv[4])
} else {
  console.log('參數輸入錯誤')
}

function listBook() {
  request(`${URL}?_limit=20`,
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
}

function readBook(id) {
  request(`${URL}/${id}`,
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
      console.log(`${books.id} ${books.name}`)
    })
}

function deleteBook(id) {
  request.delete(`${URL}/${id}`,
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
      console.log(books)
    })
}

function createBook(bookName) {
  request.post(
    {
      url: URL,
      form: { name: bookName }
    },
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
      console.log(books)
    })
}

function updateBook(id, newName) {
  request.patch(
    {
      url: `${URL}/${id}`,
      form: { name: newName }
    },
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
      console.log(books)
    })
}
