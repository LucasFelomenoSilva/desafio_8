const produtosService = require('../services/produtosService');

exports.getAllProdutos = (req, res) => {
    const produtos = produtosService.getAllProdutos();
    res.json(produtos);
};

exports.getProdutoById = (req, res) => {
    const id = req.params.id;
    const produto = produtosService.getProdutoById(id);

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
};

exports.createProduto = (req, res) => {
    const { nome, descricao, preco, data_atualizado } = req.body;
    const produto = produtosService.createProduto(nome, descricao, preco, data_atualizado);

    res.status(201).json(produto);
};

exports.updateProduto = (req, res) => {
    const id = req.params.id;
    const { nome, descricao, preco, data_atualizado } = req.body;
    const produto = produtosService.updateProduto(id, nome, descricao, preco, data_atualizado);

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
};

exports.deleteProduto = (req, res) => {
    const id = req.params.id;
    const produto = produtosService.deleteProduto(id);

    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
};

