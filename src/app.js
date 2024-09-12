const express = require('express');
const connectDB = require('./config/db.js');
const PORT = 6000;

const cliente = require("./routes/cliente.js");
const pet = require("./routes/pet.js");


const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/api/clientes', cliente);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});