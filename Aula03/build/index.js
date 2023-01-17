"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Oi Pedro!");
const database_1 = require("./database");
const types_1 = require("./types");
(0, database_1.createProduct)("C2", "chocolate", 7, types_1.ITEMS.CANDIES);
(0, database_1.queryProductsByName)("Banana");
(0, database_1.createPurchase)("Bergulino", "C2", 3);
(0, database_1.getAllPurchasesFromUserId)("PeterMaia");
//# sourceMappingURL=index.js.map