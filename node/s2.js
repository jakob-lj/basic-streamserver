const express = require("express")
const redis = require('redis')
const { promisify } = require("util");
const client = redis.createClient();
const app = express()




app.get("/node", async (req, res) => {


    const getAsync = promisify(client.get).bind(client);

    const secret = await getAsync("secret")
    console.log(secret)

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip)
    res.send('Stting')
})

app.listen(8877, () => {
    console.log('listening at jalla port')
})