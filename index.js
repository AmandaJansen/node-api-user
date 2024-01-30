require('dotenv').config()
//configuração inicial
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//ler json
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json());

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota inicial - disponibiliza a rota
app.get('/', (req, res) => {
 //exibir requisição
res.json({message: 'Express here!'})
})
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.v5zjr79.mongodb.net/?retryWrites=true&w=majority`).then(()=> {
  console.log('Conected')
  app.listen(3000) //determina a porta 

}).catch((err) => console.log(err))

