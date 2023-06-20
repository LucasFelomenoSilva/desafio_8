const mysql = require('../configs/database');

exports.getAllProdutos = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM produtos';
        mysql.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

exports.getProdutoById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM produtos WHERE id = ?';
        mysql.query(query, [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
};

exports.createProduto = (produtoData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO produtos SET ?';
        mysql.query(query, produtoData, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
};

exports.updateProduto = (id, produtoData) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE produtos SET ? WHERE id = ?';
        mysql.query(query, [produtoData, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows);
            }
        });
    });
};

exports.deleteProduto = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM produtos WHERE id = ?';
        mysql.query(query, [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows);
            }
        });
    });
};
