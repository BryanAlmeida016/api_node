import express from 'express'

const app = express()

app.use(express.json())

const usuarios = []

//criar as rotas
app.post('/cadastro',(req,res)=>{
    //console.log(req.body)
    usuarios.push(req.body)
    //res.send('Tudo certo no post :P')
    res.status(201).json(req.body)
})

app.get('/cadastro',(req,res)=>{
    //res.send('Funfou no get :)')
    res.status(200).json(usuarios)
})

//configurar porta do servidor
app.listen(3000,()=>{console.log('Servidor Rodando!')})

//npm i express -y
//npm i -g nodemon
//nodemon server.js --> roda o servidor
//npm install prisma --save-dev --> dependencia/biblioteca
//npx prisma init