'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Story', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      foreword: {
        type: Sequelize.STRING
      },
      editor: {
        type: Sequelize.BOOLEAN
      },
      source: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Story');
  }
};