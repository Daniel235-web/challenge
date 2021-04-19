const tape = require('tape')
const jsonist = require('jsonist')

const PORT = process.env.PORT = process.env.PORT || require('get-PORT-sync')()
const server = require('./server')

const urlBase = `http://localhost:${PORT}`
<<<<<<< HEAD
tape('should respond user-agent', (t) => {
  const opts = { headers: { 'User-Agent': 'tape' } }
  jsonist.get(`${urlBase}/user-agent`, opts, (err, body) => {
    if (err) t.error(err)

    t.equal(body.ua, 'tape')
=======
=======
<<<<<<< HEAD
>>>>>>> 4ab11df (fiat lux i just removed conflict)
tape('should respond b64', (t) => {
  jsonist.get(`${urlBase}/b64/hello`, (err, body) => {
    if (err) t.error(err)

    t.equal(body.b64, 'aGVsbG8=')
>>>>>>> aa23849 (feat: add base64 endpoint)
    t.end()
  })
})

=======
>>>>>>> 085b8a7 (fiat lux)
tape('cleanup', function (t) {
  server.close()
  t.end()
})
