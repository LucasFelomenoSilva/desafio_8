const express = require('express');
const router = express.Router();

module.exports = (connection) => {
    // Endpoint GET /clientes
    router.get('/', (req, res) => {
        connection.query('SELECT * FROM clientes', (error, results) => {
            if (error) {
                console.log(error);
                res.sendStatus(500);
            } else {
                res.json(results);
            }
        });
    });

    // Endpoint POST /clientes
    router.post('/', (req, res) => {
        const { nome, email } = req.body;
        connection
        connection.query('INSERT INTO clientes (nome, email) VALUES (?, ?)', [nome, email], (error, results) => {
            if (error) {
                console.log(error);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        });
    });
  
    // Endpoint PUT /clientes/:id
    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const { nome, email } = req.body;
        connection.query('UPDATE clientes SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (error, results) => {
            if (error) {
                console.log(error);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    });
  
    // Endpoint DELETE /clientes/:id
    router.delete('/:id', (req, res) => {
        const { id } = req.params;
        connection.query('DELETE FROM clientes WHERE id = ?', [id], (error, results) => {
            if (error) {
                console.log(error);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        });
    });
  
    return router;
};
  