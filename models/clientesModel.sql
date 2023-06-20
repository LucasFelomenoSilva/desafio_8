use bancodedados;
CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  sobrenome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  idade INT NOT NULL
);
INSERT INTO clientes (nome, sobrenome, email, idade) VALUES ('Carlos', 'Ribeiro', 'carlos@email.com', '25');
