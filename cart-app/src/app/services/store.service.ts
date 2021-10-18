import { Bouquet } from "src/models/bouquet";


export class StoreService {
    storeItems: Bouquet[]
    cartItems: Bouquet[] = []
    constructor() {
        this.storeItems = [
            new Bouquet(1, "Roses", 65, 4, "Bouquet from 3 roses")
        ]
    }
    getStoreItems() {
        return this.storeItems
    }
    getCartItems() {
        return this.cartItems
    }

    getItem(id: number): Bouquet {
        var bouquet: Bouquet = new Bouquet()
        this.storeItems.forEach(element => {
            if (element.id == id) {
                bouquet = element
            }
        })
        return bouquet
    }

    updateStoreItem(item: Bouquet) {
        item.quantity -= 1
        this.storeItems.forEach(element => {
            if (element.id == item.id) {
                element = item
            }
        })
        let flag = false
        this.cartItems.forEach(element => {
            if (element.id == item.id) {
                element.quantity++
                flag = true
            }
        })
        if (!flag) {
            var bouquet: Bouquet = new Bouquet(item.id, item.name, item.price, 1, item.description)
            this.cartItems.push(bouquet)

        }

    }

    addToStore(item: Bouquet) {
        let flag = false
        this.storeItems.forEach(element => {
            if (element.id == item.id) {
                element.quantity += +item.quantity
                flag = true
            }
        })
        if (!flag) {
            var bouquet: Bouquet = new Bouquet(item.id, item.name, item.price, item.quantity, item.description)
            this.storeItems.push(bouquet)

        }

    }

}