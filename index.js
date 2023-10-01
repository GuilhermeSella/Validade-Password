import express from 'express'
import { router } from './routes/routes.js';

const app = express();
const port = 8080;
app.use("/", router)


app.listen(port, (error)=>{
    if(error) console.log(error)

    console.log("Servidor rodando na porta " + port )

})
