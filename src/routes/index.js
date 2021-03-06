const express = require ('express');
const produtoController = require ('../controllers/produtoController');

const routes = express.Router();




routes.get ('/produto/lista', produtoController.listarProdutos);
routes.post ('/produto/criar', produtoController.cadastrarProduto);
routes.delete('/produto/:id/deletar', produtoController.deletarProduto);



module.exports = routes;
