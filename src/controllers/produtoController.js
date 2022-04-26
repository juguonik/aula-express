const {
    Produtos,
    Fabricantes
} = require('../models');
const Categorias = require('../models/Categorias');

const produtoController = {
    listarProdutos: async (req, res) => {
        const listaDeProdutos = await Produtos.findAll({
            include: Fabricantes,
        });


        res.json(listaDeProdutos);

    },

    async cadastrarProduto(req, res) {
        const {
            nome,
            preco,
            quantidade,
            fabricante_id,
            categoria_id,
        } = req.body;
        const novoProduto = await Produtos.create({
            nome,
            preco,
            quantidade,
            fabricante_id,
        });

        const categoria = await Categorias.findByPk(categoria_id);

        await novoProduto.setCategorias(categoria);
        
        res.json(novoProduto);
    },

    async deletarProduto(req, res) {
        const {
            id
        } = req.params;

        await Produtos.destroy({
            where: {
                id,
            },
        });

        res.json('Produto deletado');
    },

};

module.exports = produtoController;