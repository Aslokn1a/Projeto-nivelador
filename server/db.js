const mysql = require("mysql2")

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'toc'
})

db.connect((err)=>{
    if(err){
        console.log("Ocorreu um erro, erro: ",err)
    }else{
        console.log("Conectado com sucesso")
    }
})

module.exports = db