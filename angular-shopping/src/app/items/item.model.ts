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
    getRating(){
        var average: number;
        if(this.rating){
            for( var i = 0; i< this.rating.length;i++){
                average += this.rating[i];
            }
            average = average/this.rating.length;
            return average;
        } else return 0;
        
        
    }
    addComment(comment: string){
        this.comments.push(comment);
    }
    
    
}