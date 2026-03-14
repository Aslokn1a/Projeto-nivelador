const express = require("express")
const router = express.Router()
const db = require("../db")
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({storage:storage})

router.post("/",upload.single("imagem"),(req,res)=>{
    const usuario = req.session.usuario.ID
    const {local, observacao,} = req.body
    const imagem = req.file ? req.file.buffer : null
    
    
    db.query(
        "INSERT INTO denuncia(ID_USUARIO,ID_LOCAL, DATA_DEN, OBSERVACAO, FOTO) VALUES(?,?,NOW(),?,?)",
        [usuario,local,observacao,imagem],
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