import express from 'express'

import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express()
app.use(express.json())

//criar as rotas
app.post('/cadastro', async (req,res)=>{
    await prisma.usuario.create({
        data:{
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })

    res.status(201).json(req.body)
})

app.get('/cadastro', async(req,res)=>{
    const usuarios = await prisma.usuario.findMany();
    //res.send('Funfou no get :)')
    res.status(200).json(usuarios)
})

//configurar porta do servidor
app.listen(3000,()=>{console.log('Servidor Rodando!')})

//npm i express -y
//npm i -g nodemon

//nodemon server.js --> roda o servidor
//node --watch server.js --> roda o servidor também*

//npm install prisma --save-dev --> dependencia/biblioteca
//npx prisma init
//npx prisma studio --> abre o prisma studio :)
//npx prisma generate