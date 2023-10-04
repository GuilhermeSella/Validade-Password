const express = require("express")
const router = require("./routes/routes.js")

const app = express();
const port = 8080;


app.use(express.json())
app.use("/", router)


app.listen(port, (error)=>{
    if(error) console.log(error)

    console.log("Servidor rodando na porta " + port )

})

module.exports = app
