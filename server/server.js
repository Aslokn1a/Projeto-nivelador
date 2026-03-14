const express = require("express")
const cors = require("cors")
const session = require("express-session")

const usuario = require("./routes/usuario")
const denuncia = require("./routes/denuncia")
const coleta = require("./routes/coleta")

const app = express()
app.use(express.json())
app.use(cors({
    origin:true,
    credentials:true
}))

app.use(session({
    secret:"TOC",
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false
    }
}))

app.use("/usuario",usuario)
app.use("/denuncia",denuncia)
app.use("/coleta",coleta)

app.listen(3000,()=>{

    console.log("Servidor rodando porta 3000")

})