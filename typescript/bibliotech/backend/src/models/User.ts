class User{
    public id: number|null;
    public name: String;
    public email: String;
    public password:String;
    public role:'reader'|'librarian'|'admin';
    public created_at:String|null;

    constructor (id:number, name:String, email:String, password:String, role:'reader'|'librarian'|'admin', created_at:String){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.created_at = created_at;
    }
}

export default User;