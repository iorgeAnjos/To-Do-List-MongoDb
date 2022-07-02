const mongoose = require('mongoose');
const listasServices = require('../services/lista.service');

const findAllListasController = async (req, res) => {
  const Listas = await listasServices.findAllListasServices();
  res.send(Listas);
};

const findByIdListaController = async (req, res) => {
  const idParam = req.params.id;
  const escolhaLista = await listasServices.findByIdListasServices(idParam);
  res.send(escolhaLista);
};

const createListaController = async (req, res) => {
  const list = req.body;
  const newLista = await listasServices.createListaservices(list);
  res.send(newLista);
};

const updateListaController = async (req, res) => {
  const idParam = req.params.id;
  const ListaEdit = req.body;
  const updatedLista = await listasServices.updateListaservices(
    idParam,
    ListaEdit,
  );
  res.send(updatedLista);
};

const deleteListaController = async (req, res) => {
  const idParam = req.params.id;
  await listasServices.deleteListaservices(idParam);
  res.send({ message: 'Lista excluida com êxito' });
};

module.exports = {
  findAllListasController,
  findByIdListaController,
  createListaController,
  updateListaController,
  deleteListaController,
};
