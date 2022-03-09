const mongoose = require('mongoose')
const conexao = ()=>{
    //conexão com o MongoAtlas
    mongoose.connect('mongodb+srv://userAdmin:pokemon06@fiaptecnico.skgqn.mongodb.net/fiap?retryWrites=true&w=majority')
    //conexão local
    //mongoose.connect('mongodb://localhost/fiap')
} 
module.exports = conexao
