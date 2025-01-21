const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())

const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
}) 

app.post('/user', (req, res) => {
    const {name, email , password} = req.body

    if (!name || !email || !password) {
        res.status(400).json({m: "data are missing"})
    }
    res.status(201).json({m: 'usuário cadastrado com sucesso.'})
})

app.get('/user', (req, res) => {
    const { id } = req.params
    res.status(200).json({m: `usuário ${id} encontrado` })
})


app.listen(PORT, () => console.log('rodando na porta ' + PORT))


