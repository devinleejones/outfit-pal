require('dotenv/config')

const server = require('json-server')
const app = server.create()
const middleware = server.defaults()
const router = server.router('db.json')
const request = require('request-promise-native')

app.get('/weather', (req, res) => {
  request({
    uri:
      'http://api.openweathermap.org/data/2.5/forecast?zip=92618&units=imperial&appid=d073dfb1703b47ce33c493182f9cacb9',
    method: 'get'
  })
    .then(response => {
      res.send(response)
    })
    .catch(err => {
      console.error(err)
    })
})

app.use(middleware)
app.use(router)

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT)
})
