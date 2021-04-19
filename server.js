const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)
<<<<<<< HEAD
<<<<<<< HEAD
 
=======
  if (req.url.match(/^\/b64\//)) return respondBase64(req, res)
>>>>>>> aa23849 (feat: add base64 endpoint)
=======
  if (req.url.match(/^\/b64\//)) return respondBase64(req, res)
=======
>>>>>>> 085b8a7 (fiat lux)
>>>>>>> 4ab11df (fiat lux i just removed conflict)

  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

<<<<<<< HEAD
<<<<<<< HEAD
function respondUserAgent (req, res) {
  const ua = req.headers['user-agent']
  res.end(JSON.stringify({ ua }))
=======
=======
>>>>>>> 4ab11df (fiat lux i just removed conflict)
function respondBase64 (req, res) {
  const phrase = req.url.replace(/^\/b64\//, '')
  res.end(JSON.stringify({ b64: Buffer.from(phrase).toString('base64') }))
>>>>>>> aa23849 (feat: add base64 endpoint)
}

=======
>>>>>>> 085b8a7 (fiat lux)
server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
