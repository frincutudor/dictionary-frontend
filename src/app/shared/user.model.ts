export class User {
    id : string;
    username: string;
    password: string;
    role: string;


    constructor(username : string , password : string , role: string , id: string){
        this.id= id;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}