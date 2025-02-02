class User{
    public id: number|null;
    public username: String;
    public email: String;
    public password:String;
    public role:'reader'|'librarian'|'admin';
    public created_at:String|null;

    constructor (id:number, username:String, email:String, password:String, role:'reader'|'librarian'|'admin', created_at:String){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.created_at = created_at;
    }
}

export default User;