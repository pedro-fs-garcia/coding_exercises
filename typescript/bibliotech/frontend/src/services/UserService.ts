import User from "../models/User";
import AuthService from "./AuthService";

class UserService {
    private baseURL: string = 'http://localhost:5000';
    private token = sessionStorage.getItem('token');

    public async registerNewUser(username:String, email:String, password:String, role:String){
        try {
            const response = await fetch (`${this.baseURL}/api/admin/register_new_user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify({username, email, password, role})
            });

            const data = await response.json();
            console.log(data);

            if (response.status == 409){
                alert(data.error);
            }else if (response.status == 400){
                alert(data.error);
            }else if (response.status == 500){
                alert (data.error);
            }else if (response.status == 201){
                // alert(data.message)
                return data;
            }

        }catch(error){
            console.error('UserService: Error registering user:', error);
        }
        return false;
    }

    public async getUsers(): Promise<User[] | null> {
        try {
            const response = await fetch(`${this.baseURL}/api/admin/get_users`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.token}`,
                }
            });
            
            const data = await response.json();
            console.log(data);

            if (response.status == 409){
                alert(data.error);
            }else if (response.status == 400){
                alert(data.error);
            }else if (response.status == 500){
                alert (data.error);
            }else if(response.status == 403){
                AuthService.logout();
            }

            const userResponse = Array.isArray(data.allUsers) ? data.allUsers : [];
            const userList: User[] = userResponse.map((user:any) =>
                new User(user.id, user.username, user.email, user.password, user.role, user.created_at)
            );

            return userList;

        } catch (error) {
            console.error("Falha ao obter usuários:", error);
            return null;
        }
    }

    public async updateUser(user:User){
        console.log('send update request json: ', JSON.stringify(user));
        try{
            const response = await fetch(`${this.baseURL}/api/admin/update_user`, {
                method:"PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify({user})
            });

            const data = await response.json();
            console.log(data);
            
            if (response.status == 409){
                alert(data.error);
            }else if (response.status == 400){
                alert(data.error);
            }else if (response.status == 500){
                alert (data.error);
            }else if (response.status == 201){
                // alert(data.message)
                return data;
            }

        }catch(error){
            console.error("updateUSer: Erro ao atualizar usuário:", error);
        }
        return false;
    }

    public async deleteUser(id:number){
        try{
            const response = await fetch(`${this.baseURL}/api/admin/delete_user`, {
                method:"DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`,
                },
                body: JSON.stringify({id})
            });

            const data = await response.json();
            console.log(data);
            
            if (response.status == 409){
                alert(data.error);
            }else if (response.status == 400){
                alert(data.error);
            }else if (response.status == 500){
                alert (data.error);
            }else if (response.status == 201){
                alert(data.message)
                return data;
            }

        }catch(error){
            console.error("updateUSer: Erro ao atualizar usuário:", error);
        }
        return false;
    }
}

export default UserService;
