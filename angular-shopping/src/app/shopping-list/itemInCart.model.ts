export class itemInCart{
    public name: string;
    public price: number;
    public amount: number;

    constructor(name: string, price: number, amount: number){
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    
    increase(){
        this.amount +=1;
    }
    
    decrease(){
        if(this.amount > 0) {
            this.amount -=1;
        }
    }
    
}