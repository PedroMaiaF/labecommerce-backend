-- Active: 1673975619818@@127.0.0.1@3306

-- SQL dia 1 - tarefas da tarde
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

PRAGMA table_info ('users');

INSERT INTO users (id, name, email, password)
VALUES ('P001','Pedro Maia', 'pedro@email.com', 'estudante1'),
('P002','Carlos Henrique', 'henrique@email.com', 'estudante2'),
('P003','João Paulo', 'joaopaulo@email.com', 'estudante3'),
('P004','Carlos Bergson', 'bergson@email', 'estudante4');

SELECT * FROM users;

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

PRAGMA table_info ('products');

INSERT INTO products (id, name, price, category)
VALUES ('G001', 'League of Legends', 00, 'games'),
('G002', 'Pokémon', 299.99, 'games'),
('C01', 'PS5', 4300, 'video games'),
('C02', 'Nintendo Switch Oled', 2600, 'video games'),
('C03', 'XBox Series X', 3700, 'video games');

SELECT * FROM products;

-- SQL dia 2 - tarefas da tarde
SELECT * FROM products
WHERE name LIKE '%PS5';

INSERT INTO users (id, name, email, password)
VALUES ('P005','Laís Rodrigues', 'laisrodrigues@email.com', 'estudante5');
SELECT * FROM users;

INSERT INTO products(id, name, price, category)
VALUES ('G03', 'Mario Kart', 250,'games'),
('G004', 'Mario Party Ultimate', 299.00,'games');

SELECT * FROM products;

SELECT * FROM products
WHERE id = 'G004';

SELECT (name) as nameUsuario FROM users
WHERE id ='P003';

DELETE FROM products
WHERE id = 'G004';

DELETE FROM users
WHERE id = 'P003';

UPDATE users
SET name = 'Cristiano Ronaldo'
WHERE id = "P003";

UPDATE products
SET name = 'Mario Odyssey'
WHERE id = "G004";

SELECT * FROM users
ORDER BY email ASC;

SELECT * FROM products
ORDER BY price ASC
LIMIT 2 OFFSET 0;

SELECT * FROM products
WHERE price >= 10 AND price <= 4500
ORDER BY price ASC;


-- Dar baixa na tabela
DROP TABLE users;

DROP TABLE products;


-- relações sql-I
-- Exc 1
CREATE TABLE purchases (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL UNIQUE NOT NULL,
    paid INTEGER NOT NULL,
    delivered_id TEXT,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users(id)
);
-- Exc 2
INSERT INTO purchases (id, total_price, paid, delivered_id, buyer_id)
VALUES 
('G005', 285, 0, null, 'P001'),
('G006', 290, 0, null, 'P001'),
('G007', 100, 0, null, 'P002'),
('G008', 0.99, 0, null, 'P002');

PRAGMA table_info ('purchases');

UPDATE purchases
SET delivered_id = DATETIME('now')
WHERE id = 'G005';
UPDATE purchases
SET delivered_id = DATETIME('now')
WHERE id = 'G006';
UPDATE purchases
SET delivered_id = DATETIME('now')
WHERE id = 'G007';
UPDATE purchases
SET delivered_id = DATETIME('now')
WHERE id = 'G008';


SELECT * FROM purchases;

DROP TABLE purchases;

SELECT * FROM users --tabela principal
INNER JOIN purchases -- tabela FORASTEIRA kk(estrangeira)
ON purchases.buyer_id = users.id
WHERE users.id = 'P001';
SELECT * FROM users --tabela principal
INNER JOIN purchases -- tabela FORASTEIRA kk(estrangeira)
ON purchases.buyer_id = users.id
WHERE users.id = 'P002';
SELECT * FROM users --tabela principal
INNER JOIN purchases -- tabela FORASTEIRA kk(estrangeira)
ON purchases.buyer_id = users.id;

-- relações sql-II
-- Exc1

CREATE TABLE purchases_products (
    purchases_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL
);

INSERT INTO purchases_products (purchases_id, product_id, quantity)
VALUES
("pur001", "G001", 1),
("pur002", "G002", 1),
("pur003", "C01", 3);

SELECT * FROM purchases_products
-- CONTINUAR O EXERCÍCIO-SQL2




-- Para o EXERCÍCIO 3 É MELHOR CRIAR UM NOVO ARQUIVO ".DB" PARA EVITAR PERDER O QUE FOI FEITO NO "LABECOMMERCE.DB" 


