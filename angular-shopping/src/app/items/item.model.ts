export class Item{
    public name: string;
    public details: string;
    public imagePath: string;
    public price: number;
    public stock: number;
    public rating: number[];
    public visibility: boolean;
    public comments: string[];
    
    
    constructor(name: string, dets: string,imagePath: string, price: number, stock: number){
        this.name = name;
        this.details = dets;
        this.imagePath= imagePath;
        this.price = price;
        this.stock = stock;
        this.visibility = false;
        this.rating = [];
        this.comments =[];
    }
}