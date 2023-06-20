const clientesService = require('../services/clientesService');

exports.getAllClientes = (req, res) => {
    const clientes = clientesService.getAllClientes();
    res.json(clientes);
};

exports.getClienteById = (req, res) => {
    const id = req.params.id;
    const cliente = clientesService.getClienteById(id);

    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ message: 'Cliente não encontrado' });
    }
};

exports.createCliente = (req, res) => {
    const { nome, sobrenome, email, idade } = req.body;
    const cliente = clientesService.createCliente(nome, sobrenome, email, idade);

    res.status(201).json(cliente);
};

exports.updateCliente = (req, res) => {
    const id = req.params.id;
    const { nome, sobrenome, email, idade } = req.body;
    const cliente = clientesService.updateCliente(id, nome, sobrenome, email, idade);

    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ message: 'Cliente não encontrado' });
    }
};

exports.deleteCliente = (req, res) => {
    const id = req.params.id;
    const cliente = clientesService.deleteCliente(id);

    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ message: 'Cliente não encontrado' });
    }
};
