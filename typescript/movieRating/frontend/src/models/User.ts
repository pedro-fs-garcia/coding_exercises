class User{
    public id: number|null;
    public username: String;
    public password:String;
    public permission: 'user'|'admin';

    constructor (id:number, name:String, password:String, permission: 'user'|'admin'){
        this.id = id;
        this.username = name;
        this.password = password;
        this.permission = permission;
    }
}

export default User;