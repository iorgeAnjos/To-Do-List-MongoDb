const mongoose = require('mongoose');

const ListaSchema = new mongoose.Schema({
  tarefa: {
    type: String,
    required: true,
  },
});

const Lista = mongoose.model('listas', ListaSchema);

module.exports = Lista;
