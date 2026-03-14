const express = require("express")
const router = express.Router()
const db = require("../db")

router.post("/inserir",(req,res)=>{
    const usuario = req.session.usuario.ID
    const{local,tipoMaterial} = req.body
    db.query(
        `INSERT INTO requisicao (ID_USUARIO,ID_LOCAL,DATA_REQ,ID_TIPO_MATERIAL) VALUES(?,?,NOW(),?)`,
        [usuario,local,tipoMaterial],
        (err,result)=>{
            if(err){
                console.log(err)
                return res.json({sucesso:false})
            }
            res.json({sucesso:true})
        } 
    )
})
module.exports = router