const db = require('../models');

exports.listarPessoas = async (req, res) => {
  const pessoas = await db.Pessoa.findAll();
  res.json(pessoas);
};

exports.adicionarPessoa = async (req, res) => {
  const novaPessoa = await db.Pessoa.create(req.body);
  res.json(novaPessoa);
};

exports.editarPessoa = async (req, res) => {
  const { id } = req.params;
  const pessoa = await db.Pessoa.findByPk(id);
  
  if (!pessoa) {
    return res.status(404).json({ mensagem: 'Pessoa não encontrada' });
  }

  await pessoa.update(req.body);
  res.json(pessoa);
};

exports.removerPessoa = async (req, res) => {
  const { id } = req.params;
  const pessoa = await db.Pessoa.findByPk(id);

  if (!pessoa) {
    return res.status(404).json({ mensagem: 'Pessoa não encontrada' });
  }

  await pessoa.destroy();
  res.json({ mensagem: 'Pessoa removida com sucesso' });
};
exports.buscarPessoa = async (req, res) => {
  const { id } = req.params;
  const pessoa = await db.Pessoa.findByPk(id);

  if (!pessoa) {
    return res.status(404).json({ mensagem: 'Pessoa não encontrada' });
  }
  res.json(pessoa);
};
