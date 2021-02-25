const express = require("express")
const { promisify } = require("util");
const fs = require('fs');

// const redis = require('redis')
// /* Values are hard-coded for this example, it's usually best to bring these in via file or environment variable for production */
// const client = redis.createClient(
//     'redis'
// );

// const getAsync = promisify(client.get).bind(client);

// client.on("error", (e) => {
//     console.log(e)
//     console.log("failing")
// })

const obj = Object()
obj.jake = 'Cool'

const app = express()

app.get("/", (req, res) => {
    res.send("hey there")
})
// /node/jake/stream.m3u8
// jake = 192.168.1.110
app.get("/node/:key/:filename", async (req, res) => {

    const key = req.params.key
    console.log(obj.jake)

    const ip = req.headers["x-real-ip"]
    console.log(req.headers["x-real-ip"])
    console.log(req.headers["x-forwared-for"])
    let firstTime = false
    try {
        const lastIp = obj[`${key}-ip`]
        const lastTime = obj[`${key}-time`]
        console.log(obj)


        // const ip = req.headers["x-real-ip"]

        // console.log(client.get("secret"))

        // const lastIp = await getAsync(key)
        // const lastUsed = await getAsync(`${key}-time-ref`)

        //console.log(`Trying to access stream via key: ${key}, from ip: ${ip}, last ip is: ${lastIp}, last used at: ${lastUsed}`)

        if (lastIp !== ip) {
            console.log("Ip is not correct")
            if ((lastUsed - new Date()) < 60000) {
                console.log("Karantene, forbidden!!")
                return res.status(403).send("Forbidden")
            }
            console.log("You are patient my friend. Are you frodo?")
        }
    } catch {
        firstTime = true
    }

    res.set('Cache-Control', 'no-cache')
    res.set('Access-Control-Allow-Origin', '* always')
    res.set('Access-Control-Expose-Headers', 'Content-Length')
    res.set('Content-Type', 'application/vnd.apple.mpegurl')
    const stream = fs.createReadStream(`./files/hls/${req.params.filename}`)
    console.log("Updating data")
    obj[`${key}-ip`] = ip
    obj[`${key}-time`] = new Date()
    // client.set(key, ip)
    // client.set(`${key}-time-ref`, new Date())
    stream.pipe(res)
})

app.listen(9000, () => {
    console.log('Server listening on 9000')
    console.log("GOING")
    // client.set("port", 9000)
})