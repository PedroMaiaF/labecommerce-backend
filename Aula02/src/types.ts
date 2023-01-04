import { users } from "./database"
import { products } from "./database"
import { purchases } from "./database"

export type TUser = {
    id: string,
    email: string,
    password: string
}

export type TProduct = {
    id: string,
    nome: string,
    preco: number,
    category: string
}

export type TPurchase = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}