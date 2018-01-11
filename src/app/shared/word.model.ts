export class Word{

    id: string;
    name : string;
    definition : string;
    category: string; 

    constructor(name : string , definition : string , category  :string , id : string){
        this.id = id;
        this.name = name;
        this.definition = definition;
        this.category = category;
        }
}