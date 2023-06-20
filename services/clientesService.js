const mysql = require('../configs/database');

exports.getAllClientes = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM clientes';
        mysql.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

exports.getClienteById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM clientes WHERE id = ?';
        mysql.query(query, [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
};

exports.createCliente = (clienteData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO clientes SET ?';
        mysql.query(query, clienteData, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
};

exports.updateCliente = (id, clienteData) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE clientes SET ? WHERE id = ?';
        mysql.query(query, [clienteData, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows);
            }
        });
    });
};

exports.deleteCliente = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM clientes WHERE id = ?';
        mysql.query(query, [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.affectedRows);
            }
        });
    });
};
