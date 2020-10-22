const express = require('express')

const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/cadastro', (req, res) => {
 res.sendFile(__dirname + '/public/cadastro/index.html')
})

app.listen(port, (req, res) => {
    console.log("Servidor iniciado");
})