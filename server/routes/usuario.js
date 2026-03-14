const express = require("express")
const router = express.Router()
const db = require("../db")

router.post("/cadastro",(req,res)=>{
    const{nome,email,senha} =req.body
    db.query(
        "INSERT INTO usuario (ID_TIPO_USUARIO, Email, nome, senha) VALUES(2,?,?,?)",
        [email,nome,senha],
        (err, result)=>{
            if(err) return res.json(err)
        }
    )
})

router.post("/login",(req,res)=>{
    const {email,senha} = req.body
    db.query(
        "SELECT * FROM usuario WHERE Email=? AND senha=?",
        [email,senha],
        (err,result)=>{
            if(result.length>0){
                req.session.usuario = result[0]
                res.json({login:true})
            }else{
                res.json({login:false})
            }
                
        }
    )
})


router.get("/session",(req,res)=>{
    if(req.session.usuario){
        res.json({logado:true,nome:req.session.usuario.nome})
    }else{
        res.json({logado:false})
    }
})


router.get("/logout",(req,res)=>{
    req.session.destroy(()=>{
        res.json({logout:true})
    })
})


module.exports = router