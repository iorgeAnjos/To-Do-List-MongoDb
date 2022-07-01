const route = require('express').Router();
const controllerListas = require('../controllers/lista.controller');
const {
  validAll,
  idValid,
  validObjectBody,
  validAssignment,
} = require('../middlewares/lista.middleware');

route.get(
  '/allListas',
  validAll,
  controllerListas.findAllListasController,
);
route.get(
  '/one-lista/:id', 
  idValid, 
  controllerListas.findByIdListaController);
route.post(
  '/create',
  validObjectBody,
  validAssignment,
  controllerListas.createListaController,
);
route.put(
  '/update/:id',
  idValid,
  validObjectBody,
  validAssignment,
  controllerListas.updateListaController,
);
route.delete('/delete/:id', idValid, controllerListas.deleteListaController);

module.exports = route;
