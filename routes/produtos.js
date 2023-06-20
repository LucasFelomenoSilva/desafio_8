const express = require('express');
const router = express.Router();

module.exports = (connection) => {
  // Endpoint GET /produtos
  router.get('/', (req, res) => {
    connection.query('SELECT * FROM produtos', (error, results) => {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  });

  // Endpoint POST /produtos
  router.post('/', (req, res) => {
    const { nome, preco } = req.body;
    connection.query('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [nome, preco], (error, results) => {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  });

  // Endpoint PUT /produtos/:id
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco } = req.body;
    connection.query('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?', [nome, preco, id], (error, results) => {
      if (error) {
        console.log(error);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  });

  // Endpoint DELETE /produtos/:id
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM produtos WHERE id = ?', [id], (error, results) => {
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
