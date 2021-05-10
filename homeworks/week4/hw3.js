const request = require('request')
const process = require('process')

const country = process.argv[2]

request('https://restcountries.eu/rest/v2/name/', country,
  (error, response, body) => {
    if (error) {
      return console.log('錯誤', error)
    }
    if (response.statusCode < 200 && response.statusCode > 300) {
      return console.log('找不到國家資訊')
    }

    let info = ''
    try {
      info = JSON.parse(body)
    } catch (err) {
      console.log('錯誤', err)
    }

    for (let i = 0; i < info.length; i++) {
      console.log('============')
      console.log('國家：', info[i].name)
      console.log('首都：', info[i].capital)
      console.log('貨幣：', info[i].currencies[0].code)
      console.log('國碼：', info[i].callingCodes[0])
    }
  })
