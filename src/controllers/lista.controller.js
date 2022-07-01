const mongoose = require('mongoose');

const tarefasServices = require('../services/lista.service');

const findAllTarefasController = async (req, res) => {
  const tarefas = await tarefasServices.findAllTarefasServices();

  if (tarefas.length == 0) {
    return res.status(400).send({ message: 'nenhuma tarefa encontrada' });
  }
  res.send(tarefas);
};

const findByIdTarefasController = async (req, res) => {
  const paramId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(paramId)) {
    return res.status(400).send({ message: 'Id não encontrado' });
  }
  const escolhaTarefa = await tarefasServices.findByIdTarefasServices(paramId);

  if (!escolhaTarefa) {
    return res.status(404).send({ message: 'Tarefa não encontrada' });
  }
  res.send(escolhaTarefa);
};

const createTarefaController = async (req, res) => {
  const taref = req.body;
  const dbtask = await tarefasServices.findOne(taref);

  if (!taref || !taref.tarefa) {
    return res.status(400).send({ mensagem: 'Adicione alguma tarefa' });
  }

  if (dbtask !== null) {
    return res.status(400).send({ message: 'tarefa já existe' });
  }

  const newTarefa = await tarefasServices.createTarefaServices(taref);
  res.send(newTarefa);
};

const updateTarefaController = async (req, res) => {
  const idParam = req.params.id;
  const tarefaEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'Id não encontrado' });
  }
  if (!tarefaEdit || !tarefaEdit.tarefa) {
    return res
      .status(400)
      .send({ message: 'Você precisa adicionar alguma tarefa' });
  }

  const updatedTarefa = await tarefasServices.updateTarefaServices(
    idParam,
    tarefaEdit,
  );

  res.send(updatedTarefa);
};

const deleteTarefaController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'tarefa não encontrada' });
  }
  await tarefasServices.deleteTarefaServices(idParam);
  res.send({ message: 'Tarefa excluida com êxito' });
};

module.exports = {
  findAllTarefasController,
  findByIdTarefasController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
};
