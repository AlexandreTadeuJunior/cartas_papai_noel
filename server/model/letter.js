// mapeando a tabela que criamos para que a nossa api consiga enchergar ela 
module.exports = {
    letter: function letter (queryInterface, Sequelize) {
      return queryInterface.define(
        'letter',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          tittle: {
            type: Sequelize.STRING
          },
          body: {
            type: Sequelize.STRING
          },
          children_name: {
            type: Sequelize.STRING
          }
        },
        {
          timestamps: false,
          freezeTableName: true
        }
      );
    }
  };