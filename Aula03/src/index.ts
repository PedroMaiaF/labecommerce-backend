console.log("Oi Pedro!")

import {createUser, getAllUsers} from './database'

// createUser("novousuario", "novousuario@gmail.com", "novato")

// getAllUsers()

import {createProduct, 
        getAllProducts, 
        getProductById, 
        queryProductsByName, 
        createPurchase, 
        getAllPurchasesFromUserId
      } from './database'
import {ITEMS} from './types'

createProduct("C2", "chocolate", 7, ITEMS.CANDIES)

// getAllProducts()

// getProductById("p1055")
// getProductById("p10")

queryProductsByName("Banana")
// queryProductsByName("monitor")

createPurchase("Bergulino", "C2", 3)
getAllPurchasesFromUserId("PeterMaia")



