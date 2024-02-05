'use strict';

module.exports = (sequelize, DataTypes) => {
  const Tarefa = sequelize.define('Tarefa', {
    descricao: DataTypes.STRING,
    prioridade: DataTypes.ENUM('baixa', 'normal', 'alta'),
    estado: DataTypes.ENUM('Pendente', 'Em andamento', 'Concluída'),
  });

  Tarefa.associate = (models) => {
    Tarefa.belongsTo(models.Pessoa);
  };

  return Tarefa;
};