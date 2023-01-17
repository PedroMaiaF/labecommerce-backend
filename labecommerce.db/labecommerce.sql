-- Active: 1673975619818@@127.0.0.1@3306

-- SQL dia 1 - tarefas da tarde
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

PRAGMA table_info ('users');

INSERT INTO users (id, email, password)
VALUES ('Pedro Maia', 'pedro@email.com', 'estudante2'),
('Carlos Henrique', 'henrique@email.com', 'estudante1'),
('João Paulo', 'joaopaulo@email.com', 'estudante5'),
('Carlos Bergson', 'bergson@email', 'estudante3');

SELECT * FROM users;

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

PRAGMA table_info ('products');

INSERT INTO products (id, name, price, category)
VALUES ('J01', 'League of Legends', 00, 'games'),
('J02', 'Pokémon', 299.99, 'games'),
('C01', 'PS5', 4300, 'video games'),
('C02', 'Nintendo Switch Oled', 2600, 'video games'),
('C03', 'XBox Series X', 3700, 'video games');

SELECT * FROM products;

-- SQL dia 2 - tarefas da tarde
SELECT * FROM products
WHERE name LIKE '%PS5';

INSERT INTO users (id, email, password)
VALUES ('Laís Rodrigues', 'laisrodrigues@email.com', 'estudante4');
SELECT * FROM users;

INSERT INTO products(id, name, price, category)
VALUES ('J03', 'Mario Kart', 250,'games'),
('J04', 'Mario Party Ultimate', 299.00,'games');

SELECT * FROM products;

SELECT * FROM products
WHERE id = 'J04';

SELECT (id) as idUsuario FROM users
WHERE id ='João Paulo';

DELETE FROM products
WHERE id = 'J04';

DELETE FROM users
WHERE id = 'João Paulo';

UPDATE users
SET id = 'Cristiano Ronaldo'
WHERE id = "João Paulo";

UPDATE products
SET name = 'Cristiano Ronaldo'
WHERE id = "João Paulo";

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
