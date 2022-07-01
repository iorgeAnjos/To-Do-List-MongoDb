const mongoose = require('mongoose');
const listasServices = require('../services/lista.service');

const validAll = async (req, res, next) => {
  const Listas = await listasServices.findAllListasServices();
  if (Listas.length == 0) {
    return res.status(400).send({ message: 'nenhuma Lista encontrada' });
  }
  next();
};
const idValid = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id não encontrado' });
  }
  next();
};
const validObjectBody = (req, res, next) => {
  const list = req.body;
  if (!list || !list.tarefa) {
    return res.status(400).send({ mensagem: 'Adicione alguma Lista' });
  }
  next();
};
const validAssignment = async (req, res, next) => {
  const newTask = req.body;
  const dbtask = await listasServices.findOne(newTask);
  console.log(dbtask);
  if (dbtask !== null) {
    return res.status(400).send({ message: 'Lista já existe' });
  }
  next();
};


module.exports = {
  validAll,
  idValid,
  validObjectBody,
  validAssignment,
 
};
