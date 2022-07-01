const route = require('express').Router();
const controllerTarefas = require('../controllers/lista.controller');

route.get('/todasTarefas', controllerTarefas.findAllTarefasController);
route.get('/tarefa/:id', controllerTarefas.findByIdTarefasController);
route.post('/create', controllerTarefas.createTarefaController);
route.put('/update/:id', controllerTarefas.updateTarefaController);
route.delete('/delete/:id', controllerTarefas.deleteTarefaController);

module.exports = route;
