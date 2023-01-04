"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
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
exports.products = [
    {
        id: 'F01',
        nome: 'Banana',
        preco: 4,
        category: 'Fruta'
    },
    {
        id: 'F02',
        nome: 'Goiaba',
        preco: 5,
        category: 'Fruta'
    }
];
exports.purchases = [{
        userId: 'PeterMaia',
        productId: 'F01',
        quantity: 4,
        totalPrice: 16
    },
    {
        userId: 'Cazénrique',
        productId: 'F02',
        quantity: 3,
        totalPrice: 15
    }
];
//# sourceMappingURL=database.js.map