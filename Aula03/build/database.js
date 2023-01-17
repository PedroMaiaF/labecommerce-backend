"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.Purchases = exports.Products = exports.Users = void 0;
const types_1 = require("./types");
exports.Users = [
    {
        id: 'PeterMaia',
        email: 'pedrin@gmail.com',
        password: '123oi'
    },
    {
        id: 'Cazénrique',
        email: 'cazezin@gmail.com',
        password: '123tchau'
    }
];
exports.Products = [
    {
        id: 'F1',
        name: 'Banana',
        price: 4,
        category: types_1.ITEMS.FRUITS
    },
    {
        id: 'C1',
        name: 'Paçoquinha',
        price: 1,
        category: types_1.ITEMS.CANDIES
    },
    {
        id: 'E1',
        name: 'MacBook',
        price: 5000,
        category: types_1.ITEMS.ELETRONICS
    }
];
exports.Purchases = [{
        userId: 'PeterMaia',
        productId: 'F1',
        quantity: 4,
        totalPrice: 16
    },
    {
        userId: 'Cazénrique',
        productId: 'C1',
        quantity: 10,
        totalPrice: 10
    }
];
const createUser = (user, userEmail, userPassword) => {
    exports.Users.push({ id: user, email: userEmail, password: userPassword });
    console.log("Cadastro realizado com sucesso");
};
exports.createUser = createUser;
const getAllUsers = () => {
    console.table(exports.Users);
};
exports.getAllUsers = getAllUsers;
const createProduct = (productId, productName, productPrice, productCategory) => {
    exports.Products.push({ id: productId, name: productName, price: productPrice, category: productCategory });
    console.log("Produto criado com sucesso");
};
exports.createProduct = createProduct;
const getAllProducts = () => {
    console.table(exports.Products);
};
exports.getAllProducts = getAllProducts;
const getProductById = (idToSearch) => {
    const foundProduct = exports.Products.filter((item) => item.id === idToSearch);
    if (foundProduct.length == 0) {
        console.log("Produto não encontrado");
    }
    else {
        console.log("Produto encontrado:", foundProduct);
    }
};
exports.getProductById = getProductById;
const queryProductsByName = (q) => {
    const foundProduct = exports.Products.filter((item) => item.name === q);
    if (foundProduct.length == 0) {
        console.log("Resultado da busca: Produto não encontrado");
    }
    else {
        console.log("Resultado da busca:", foundProduct);
    }
};
exports.queryProductsByName = queryProductsByName;
const createPurchase = (userId, productId, quantity) => {
    exports.Purchases.push({ userId: userId, productId: productId, quantity: quantity, totalPrice: quantity * exports.Products[2].price });
    console.log("Compra realizada com sucesso ");
};
exports.createPurchase = createPurchase;
const getAllPurchasesFromUserId = (userIdToSearch) => {
    const foundProduct = exports.Purchases.filter((item) => item.userId === userIdToSearch);
    if (foundProduct.length == 0) {
        console.log("Usuário não encontrado");
    }
    else {
        console.log("Usuário encontrado:", foundProduct);
    }
};
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map