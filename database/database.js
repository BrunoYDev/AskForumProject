const Sequelize = require('sequelize');

const connection = new Sequelize('askquestions', 'root', '-', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
