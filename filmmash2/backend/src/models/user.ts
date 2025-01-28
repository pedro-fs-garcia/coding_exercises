class User {
    public id:number|null;
    public username: String;
    public email:String;
    public password:String;

    constructor(id:number|null, username:String, email:String, password:String){
        this.id = id
        this.username = username
        this.email = email
        this.password = password
    }
}

export default User;