// É uma pequena base para os frameworks
// ⌨ = Linhas de código
// import { createServer } from 'node:http' // o node contém diversos tipos modulos o http é um exemplo //⌨

// Por uma arrow function estou criando um server que ao iniciar irá retornar  um "Hello World !!"
// const server = createServer(( /*podemos receber dois paremetros dentro desta função*///⌨
//      request, /* para receber dados das requisições dos usuários */ //⌨
//      response /* utilizado para fazer a resposta para o que utiliza a API */ //⌨
//     ) => {
//         response.write('Hello World ');//⌨
        // return response.end() //⌨ existem diversos métodos dentro do response, este que estou usando permite a tela ficar branca
// })//⌨

// Após criar um servidor, o 'server' me devolve um método listen 
// esse método é para configurar o endereço do servidor ou seja 'localhost:4444' 💾
// server.listen(4444) ⌨

// =================================================================
//Importar o fastify que é um framework para o Node.js

import { fastify } from 'fastify';

const server = fastify();

// Utilizando o server.get para colocar o 'Hello World'
server.get('/', () => {
    return 'Hello World'
})

server.get('/oi', () => {
    return 'Oi mundo'
})

server.get('/Adrian', () => {
    return 'Neon do Adrian anda melhorando'
})

// Configurando a porta do localhost:4444
server.listen({
    port: 4444,
})

// Utilizando o fastify conseguimos fazer vários tipos de requisições diferentes utilizando rotas diferentes