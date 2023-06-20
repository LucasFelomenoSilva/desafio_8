const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

app.get('/', (req, res) => {
    res.send('Desafio 08-2 Back-End 2');
});

const clientesRouter = require('./routes/clientes');
app.use('/clientes', clientesRouter(connection));

const produtosRouter = require('./routes/produtos');
app.use('/produtos', produtosRouter(connection));

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
