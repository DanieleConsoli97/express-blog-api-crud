const express = require("express")
app=express()
port=3000
console.log(port)
const postsRouter = require('./routers/posts')
app.use(express.static("public"))
app.listen(port, () => {
    console.log(`Example app listening ON http://localhost:${port}`)
    })