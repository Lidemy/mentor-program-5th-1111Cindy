// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': 'xu6c92u6w39aqb68b6qxhva6k4t4vf',
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}

function callback(error, response, body) {
  if (error) {
    console.log('錯誤', error)
    return
  }
  let info = ''
  try {
    info = JSON.parse(body)
  } catch (err) {
    console.log('錯誤', err)
  }

  for (let i = 0; i < info.top.length; i++) {
    console.log(`${info.top[i].game._id} ${info.top[i].game.name}`)
  }
}

request(options, callback)
