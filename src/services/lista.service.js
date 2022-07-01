const Lista = require('../models/Lista');

const findAllListasServices = async () => {
  const alllistas = await Lista.find();
  return alllistas;
};

const findByIdListasServices = async (idParam) => {
  const oneLista = await Lista.findById(idParam);
  return oneLista;
};

const createListaservices = async (newListas) => {
  const CreatedLista = await Lista.create(newListas);
  return CreatedLista;
};

const updateListaservices = async (idParam, ListasEdited) => {
  const updatedLista = await Lista.findByIdAndUpdate(idParam, ListasEdited)
  return updatedLista;
};

const deleteListaservices = async (idParam) => {
  return await Lista.findByIdAndDelete(idParam)
};

const findOne = async (newTask) => {
  const dbtask = await Lista.findOne({ tarefa: newTask.tarefa }).exec();
  return dbtask;
};
/* const findOne = async (newTask) => {
  const dbtask = await Lista.findOne({nome: newTask.nome, prioridade: newTask.prioridade}).exec();
  return dbtask
} */

module.exports = {
  findAllListasServices,
  findByIdListasServices,
  createListaservices,
  updateListaservices,
  deleteListaservices,
  findOne,
};
