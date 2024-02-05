// routes/pessoaRoutes.js
const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoaController');

router.get('/pessoas', pessoaController.listarPessoas);
router.post('/pessoas', pessoaController.adicionarPessoa);
router.get('/pessoas/:id', pessoaController.buscarPessoa);
router.put('/pessoas/:id', pessoaController.editarPessoa);
router.delete('/pessoas/:id', pessoaController.removerPessoa);

module.exports = router;
