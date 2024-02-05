'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    nome: DataTypes.STRING,
  });

  Pessoa.associate = (models) => {
    Pessoa.hasMany(models.Tarefa);
  };

  return Pessoa;
};
