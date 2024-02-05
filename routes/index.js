const express = require('express');
const router = express.Router();

const tarefaRoutes = require('./tarefaRoutes');
const pessoaRoutes = require('./pessoaRoutes');

router.use('/v1', tarefaRoutes);
router.use('/v1', pessoaRoutes);

module.exports = router;