import User from "../models/User";
import { logout } from "./authServices";

export async function getAllUsers(){
    const token = sessionStorage.getItem('token');
    try{
        const response = await fetch ('http://localhost:5000/admin/get_all_users', {
            method:'GET',
            headers: {
                Authorization: `Bearer ${token}`,
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
            logout();
        }

        const arrayResponse = Array.isArray(data.allUsers) ? data.allUsers : [];
        const userList: User[] = arrayResponse.map((user:User) =>
            new User(user.id, user.username, user.password, user.permission)
        );

        return userList;

    }catch(error){
        console.error("Falha ao obter usuários:", error);
        return null;
    }
}

export async function adminCreateNewUser(username:String, password:String, permission:'user'|'admin'){
    const token = sessionStorage.getItem('token');
    try{
        const response = await fetch ('http://localhost:5000/admin/create_user', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({username, password, permission})
        });

        const data = await response.json();

        if(response.status == 200){
            return true;
        }else{
            alert(data.error);
        }

    }catch(error){
        console.error("Erro ao criar usuario como admin")
    }
    return false;
}

export async function adminUpdateUser(user:User){
    const token = sessionStorage.getItem('token');
    console.log("adminUpdateUser: user: ", user);
    try{
        console.log(`http://localhost:5000/admin/update_user/${user.id}`)
        const response = await fetch(`http://localhost:5000/admin/update_user/${user.id}`, {
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({user})
        });

        const data = await response.json();

        if(response.status == 200){
            return true;
        }else{
            alert(data.error);
        }

    }catch(error){
        console.error("erro ao acessar servidor para atualizar usuário");
    }
    return false;
}

export async function adminDeleteUser(user_id:number){
    const token = sessionStorage.getItem('token');
    try{
        const response = await fetch(`http://localhost:5000/admin/delete_user/${user_id}`,{
            method:"DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({user_id})
        });
        const data = await response.json();
        if(response.status == 200){
            return true;
        }else{
            alert(data.error);
        }
    }catch(error){
        console.error("erro ao acessar servidor para deletar usuário");
    }
    return false;
}