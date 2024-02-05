'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tarefas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prioridade: {
        type: Sequelize.ENUM('baixa', 'normal', 'alta'),
        allowNull: false,
      },
      estado: {
        type: Sequelize.ENUM('Pendente', 'Em andamento', 'Concluída'),
        allowNull: false,
      },
      PessoaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pessoas',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tarefas');
  },
};
