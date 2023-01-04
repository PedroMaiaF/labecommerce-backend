import { TUser } from "./types"
import { TProduct } from "./types"
import { TPurchase } from "./types"

export const users: TUser[] = [
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
]

export const products: TProduct[] = [
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
]

export const purchases: TPurchase[] = [{
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
]