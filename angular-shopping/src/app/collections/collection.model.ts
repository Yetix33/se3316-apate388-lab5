import { Item } from '../items/item.model'

export class Collection{
    public itemsInCollection : any[];
    public name: string;
    public desc: string;
    public status: boolean;
    constructor(name: string, desc: string, status: boolean){
        this.name = name;
        this.desc = desc;
        this.status = status;
        this.itemsInCollection = [];
    }
    
    
    
    
}