//moduló tradicional do http

const http = require('http')

//criando um servidor e acessando no navegador 
http.createServer(function(req,res){
    res.end("Olá")
}).listen(3000) //.listen() está definindo uma porta de acesso para o servidor local

//verificando se o servidor está funcionando 
console.log("O servidor está rodando !")