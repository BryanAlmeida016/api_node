import express from 'express'
import cors from 'cors'

import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express()
app.use(express.json())
app.use(cors())

//criar as rotas

app.put('/cadastro/:id', async (req,res)=>{
    //console.log(req.params.id)
    await prisma.usuario.update({
        where:{
            id: req.params.id
        },
        data:{
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })

    res.status(201).json({"message":"Usuario Atualizado :)"})
})

app.delete('/cadastro/:id', async (req,res)=>{
    //console.log(req.params.id)
    await prisma.usuario.delete({
        where:{
            id: req.params.id
        },
    })

    res.status(201).json({"message":"Usuario Deletado :("})
})

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
//npx prisma db push
//npx prisma studio --> abre o prisma studio :)
//npx prisma generate