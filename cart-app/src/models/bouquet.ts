export class Bouquet{
    id:number
    name: string
    price:number
    quantity:number
    description:string

    constructor(id?:number,name?:string, price?:number, quantity?:number, description?:string){
        this.id = id?id:0
        this.name = name?name:""
        this.price = price?price:0
        this.quantity = quantity?quantity:0
        this.description = description?description:""
    }
}