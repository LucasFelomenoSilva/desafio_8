use bancodedados;
CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  data_atualizado DATETIME NOT NULL
);



