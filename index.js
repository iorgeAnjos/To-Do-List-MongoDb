const express = require('express');
const cors = require('cors');
const port = 3000;

const route = require('./src/routers/lista.route');
const connectToDatabase = require('./src/database/db');

const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/tarefas/', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
