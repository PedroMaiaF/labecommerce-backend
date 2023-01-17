import { ITEMS, TUser, TProduct, TPurchase } from "./types"

export const Users: TUser[] = [
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

export const Products: TProduct[] = [
    {
        id: 'F1',
        name: 'Banana',
        price: 4,
        // CATEGORIA: fruta;
        category: ITEMS.FRUITS
    },
    {
        id: 'C1',
        name: 'Paçoquinha',
        price: 1,
        // CATEGORIA: doces;
        category: ITEMS.CANDIES
    },
    {
        id: 'E1',
        name: 'MacBook',
        price: 5000,
        // CATEGORIA: eletrônicos;
        category:ITEMS.ELETRONICS
    }
]

export const Purchases: TPurchase[] = [{
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
]

// EXERCÍCIO 2
// User:
export const createUser = (user: string, userEmail: string, userPassword: string) => {
    Users.push({id: user, email: userEmail, password: userPassword})
    console.log("Cadastro realizado com sucesso")
}

export const getAllUsers = () => {
    console.table(Users)
}

// Product:
export const createProduct = (productId: string, productName: string, productPrice: number, productCategory: ITEMS) => {
    Products.push({id: productId, name: productName, price: productPrice, category: productCategory})
    console.log("Produto criado com sucesso")
}

export const getAllProducts = () => {
    console.table(Products)
}

export const getProductById = (idToSearch: string) => {
    const foundProduct = Products.filter((item) =>item.id === idToSearch)

    if(foundProduct.length == 0){
        console.log("Produto não encontrado")
    } else {
        console.log("Produto encontrado:", foundProduct)
    }
}

export const queryProductsByName  = (q: string) => {
  const foundProduct = Products.filter((item) => item.name === q)
  
  if(foundProduct.length == 0){
    console.log("Resultado da busca: Produto não encontrado")
  }else{
    console.log("Resultado da busca:", foundProduct)
  }
}

// Exc2 cont.
export const createPurchase  = (userId: string, productId: string, quantity: number) => {
  Purchases.push({userId: userId, productId: productId, quantity: quantity, totalPrice: quantity * Products[2].price})
  console.log("Compra realizada com sucesso ")
}

export const getAllPurchasesFromUserId   = (userIdToSearch: string) => {
  const foundProduct = Purchases.filter((item) => item.userId === userIdToSearch)
  
  if(foundProduct.length == 0){
    console.log("Usuário não encontrado")
  }else{
    console.log("Usuário encontrado:", foundProduct)
  }
}