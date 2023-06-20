exports.validarCamposCliente = (req, res, next) => {
    const { nome, sobrenome, email, idade } = req.body;
  
    if (!nome || !sobrenome || !email || !idade) {
        return res.status(400).json({ message: 'Todos os campos do cliente são obrigatórios' });
    }
  
    next();
};
  
// Middleware para validar campos obrigatórios em uma requisição de produto
exports.validarCamposProduto = (req, res, next) => {
    const { nome, descricao, preco, data_atualizado } = req.body;
  
    if (!nome || !descricao || !preco || !data_atualizado) {
        return res.status(400).json({ message: 'Todos os campos do produto são obrigatórios' });
    }
  
    next();
};
  