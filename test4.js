/*
4) Banco de dados

Uma empresa solicitou a você um aplicativo para manutenção de um cadastro de clientes. Após a reunião de definição dos requisitos, as conclusões foram as seguintes:

- Um cliente pode ter um número ilimitado de telefones;
- Cada telefone de cliente tem um tipo, por exemplo: comercial, residencial, celular, etc. O sistema deve permitir cadastrar novos tipos de telefone;
- A princípio, é necessário saber apenas em qual estado brasileiro cada cliente se encontra. O sistema deve permitir cadastrar novos estados;

Você ficou responsável pela parte da estrutura de banco de dados que será usada pelo aplicativo. Assim sendo:

- Proponha um modelo lógico para o banco de dados que vai atender a aplicação. Desenhe as tabelas necessárias, os campos de cada uma e marque com setas os relacionamentos existentes entre as tabelas;
- Aponte os campos que são chave primária (PK) e chave estrangeira (FK);
- Faça uma busca utilizando comando SQL que traga o código, a razão social e o(s) telefone(s) de todos os clientes do estado de São Paulo (código “SP”);

*/

/*
RESPOSTA:

1) Modelo lógico:

-- Criação da tabela Estados
CREATE TABLE Estados (
    sigla VARCHAR(2) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- Criação da tabela Tipos_Telefone
CREATE TABLE Tipos_Telefone (
    tipo VARCHAR(50) PRIMARY KEY
);

-- Criação da tabela Clientes
CREATE TABLE Clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    razao_social VARCHAR(100) NOT NULL,
    estado VARCHAR(2),
    FOREIGN KEY (estado) REFERENCES Estados(sigla)
);

-- Criação da tabela Telefones
CREATE TABLE Telefones (
    id_telefone INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    numero VARCHAR(15) NOT NULL,
    tipo VARCHAR(50),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (tipo) REFERENCES Tipos_Telefone(tipo)
);

2) Chaves Primárias (PK) e Chaves Estrangeiras (FK):

Clientes

PK: id_cliente
FK: estado (referencia Estados.sigla)
Telefones

PK: id_telefone
FK: id_cliente (referencia Clientes.id_cliente)
FK: tipo (referencia Tipos_Telefone.tipo)
Tipos_Telefone

PK: tipo
Estados

PK: sigla

3) Para buscar o código, a razão social e os telefones de todos os clientes do estado de São Paulo (código "SP"), a consulta SQL seria:

SELECT 
    c.id_cliente,
    c.razao_social,
    t.numero
FROM 
    Clientes c
JOIN 
    Telefones t ON c.id_cliente = t.id_cliente
WHERE 
    c.estado = 'SP';

*/