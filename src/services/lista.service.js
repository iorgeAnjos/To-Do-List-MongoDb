const Lista = require('../models/Lista');

const findAllTarefasServices = async () => {
  const listas = await Lista.find();
  return listas;
};

const findByIdTarefasServices = async (id) => {
  const listas = await Lista.findById(id);
  return listas;
};

const createTarefaServices = async (newTarefa) => {
  const tarefaCreated = await Lista.create(newTarefa);
  return tarefaCreated;
};

const updateTarefaServices = async (id, tarefaEdited) => {
  const tarefaAtualizada = await Lista.findByIdAndUpdate(id, tarefaEdited)
  return tarefaAtualizada;
};

const deleteTarefaServices = async (id) => {
  return await Lista.findByIdAndDelete(id)
};

const findOne = async (newTask) => {
  const dbtask = await Lista.findOne({ tarefa: newTask.tarefa }).exec();
  return dbtask;
};

module.exports = {
  findAllTarefasServices,
  findByIdTarefasServices,
  createTarefaServices,
  updateTarefaServices,
  deleteTarefaServices,
  findOne,
};
