// parte 1 da aula ensinando a baixar o express e introdução ao npm

//importando a biblioteca express e atribuindo a variável 
const express = require("express")

//a variável app está importando a variável express e tudo que a biblioteca tem
// a variável app é a principal do sistema 
const app = express()




//rota ou caminho 
app.get("/", function(req,res){
    res.send("Seja bem-vindo a app")
})

app.get("/use", function(req,res){
    res.send("Bem-vindo usuário")
})

app.get("/sobre", function(req,res){
    res.send("rota sobre ")
})


//abrindo servidor
//detalher essa função sempre será a ultima do código
app.listen(3000, function(){ // a function tem que ser de callback 
    console.log("O servidor está rodando na url http://localhost:3000") //mensagem para exibir o funcionamento do servidor 
                                            
})
