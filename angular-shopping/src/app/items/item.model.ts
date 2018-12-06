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
        this.visibility = true;
        this.rating = [1];
        this.comments = ['very nice'];
    }
    getRating(){
        var average = 0;
        if(this.rating !=null){
            for( var i = 0; i< this.rating.length; i++){
                average += this.rating[i];
            }
            average = average/this.rating.length;
            return average;
        }else return 0;
        
    }
    
    
}