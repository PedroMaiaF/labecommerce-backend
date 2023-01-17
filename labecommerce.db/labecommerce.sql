-- Active: 1673873950449@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

PRAGMA table_info ('users');

INSERT INTO users (id, email, password)
VALUES ('Pedro Maia', 'pedro@email.com', 'estudante2'),
('Carlos Henrique', 'henrique@email.com', 'estudante1'),
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