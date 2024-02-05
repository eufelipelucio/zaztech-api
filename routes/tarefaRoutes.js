const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get('/tarefas', tarefaController.listarTarefas);
router.post('/tarefas', tarefaController.adicionarTarefa);
router.get('/tarefas/:id', tarefaController.buscaTarefa);
router.put('/tarefas/:id', tarefaController.editarTarefa);
router.delete('/tarefas/:id', tarefaController.removerTarefa);

module.exports = router;
