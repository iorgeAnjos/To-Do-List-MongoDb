const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/todolist-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDb CONECTADO');
    })
    .catch((err) => {
      console.log(`Erro na conexão do banco: ${err}`);
    });
};

module.exports = connectToDatabase;
