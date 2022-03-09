const { app } = require("../config/servidor")

module.exports = (app)=>{
    app.get('/professor',(req,res)=>{
        res.render('professor.ejs')
    })


app.post('/professor',(req,res)=>{
    var infos = req.body

    var conexao = require('../config/database')()

    var pros = require('../models/profs')

    var documentos = new profs({
        nome:infos.nome,
        disciplina:infos.disciplina,
        turma:infos.turma,
        email:infos.email
    }).save()
    .then((result)=>{res.redirect('/professor')})
    .catch((err)=>{
        console.log(err)
    })
})
}