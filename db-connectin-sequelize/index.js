const express = require("express")
const bodyParser = require("body-parser")
const userRouter = require("./modules/user/user.controller")
const app = express()
app.use(bodyParser.json())
app.use("/api",userRouter)
app.get("/", (req, res) => {
    res.send("this is server")
})

app.listen(3000, () => {
    console.log("listening port on 3000")
})
