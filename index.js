const express = require('express')
const app = express()
const port = 3000

app.get('/thanh', (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send('Thanhdz!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})