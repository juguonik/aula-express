const db = require('../database');
const {
    DataTypes
} = require('sequelize');

const Categorias = db.define('', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }

}, {
    tableName: 'categorias',

});

module.exports = Categorias;