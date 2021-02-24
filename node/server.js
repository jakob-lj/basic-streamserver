const express = require("express")
const fs = require('fs');

const app = express()

app.get("/", (req, res) => {
    res.send("hey there")
})

app.get("/node/:key/:filename", (req, res) => {
    res.set('Cache-Control', 'no-cache')
    res.set('Access-Control-Allow-Origin', '* always')
    res.set('Access-Control-Expose-Headers', 'Content-Length')
    res.set('Content-Type', 'application/vnd.apple.mpegurl')
    const stream = fs.createReadStream(`./files/hls/${req.params.filename}`)
    stream.pipe(res)
})

app.listen(9000, () => {
    console.log('Server listening on 9000')
})