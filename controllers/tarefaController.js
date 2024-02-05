const db = require('../models');

exports.listarTarefas = async (req, res) => {
  const tarefas = await db.Tarefa.findAll();
  res.json(tarefas);
};

exports.listarTarefasComPessoas = async (req, res) => {
  try {
    const tarefas = await db.Tarefa.findAll({
      include: [{
        model: db.Pessoa,
        attributes: ['nome'],
        through: {
          attributes: []  
        }
      }]
    });

    res.json(tarefas);
  } catch (error) {
    console.error('Erro ao listar tarefas com pessoas:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

exports.adicionarTarefa = async (req, res) => {
  const { descricao, prioridade, estado, PessoaId } = req.body;

  try {
    
    const pessoa = await db.Pessoa.findByPk(PessoaId, {
      include: [db.Tarefa],
    });
    if(!pessoa){
      return res.status(400).json({ error: 'Necessário uma pessoa para a tarefa'});
    }

    if (pessoa && pessoa.Tarefas.length >= 3) {
      return res.status(400).json({ error: 'Pessoa já está associada a 3 tarefas' });
    }

    const novaTarefa = await db.Tarefa.create({
      descricao,
      prioridade,
      estado,
      PessoaId: PessoaId,
    });

    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

exports.buscaTarefa = async (req, res) => {
  const { id } = req.params;
  const tarefa = await db.Tarefa.findByPk(id);
  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }
  res.json(tarefa);

};

exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { PessoaId } = req.body;

  const pessoa = await db.Pessoa.findByPk(PessoaId, {
    include: [db.Tarefa],
  });

  if (pessoa && pessoa.Tarefas.length >= 3) {
    return res.status(400).json({ error: 'Pessoa já está associada a 3 tarefas' });
  }


  const tarefa = await db.Tarefa.findByPk(id);
  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  await tarefa.update(req.body);

  res.json(tarefa);
};

exports.removerTarefa = async (req, res) => {
  const { id } = req.params;
  const tarefa = await db.Tarefa.findByPk(id);
  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  await tarefa.destroy();

  res.json({ mensagem: 'Tarefa removida com sucesso' });
};

