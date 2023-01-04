export class Model{
    user;
    items;

    constructor(){
        this.user ="Resul Kızmaz";
        this.items=[
            new TodoItems("Kahvaltı",true),
            new TodoItems("Kitap Okuma",false),
            new TodoItems("Spor",false),
            new TodoItems("Sinama",false),
        ];
    }
}
export class TodoItems{
    description;
    action;
    
    constructor(description:string, action:boolean ){
        this.description = description;
        this.action = action;
    }
}