import { Navigate, useNavigate } from "react-router-dom";

export async function authLogin(username:String, password:String){
    try{
        const response = await fetch("http://localhost:5000/login", {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });

        const data = await response.json();

        if (response.status == 200){
            console.log('resposta recebida do servidor pelo pedido de login', data);
            return data;
        }

        if(!response.ok){
            console.log("resposta inválida do servidor na autorização de login.")
            throw new Error(data.error || 'Falha no login');
        }

    }catch(error){
        console.error("Erro ao obter resposta de login do servidor", error);
        alert("falha de login");
    }
    return null;
}

export async function authRegister(username:String, password:String){
    try{
        const response = await fetch("http://localhost:5000/register", {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });

        const data = await response.json();

        if (response.status == 200){
            console.log('resposta recebida do servidor ao registrar usuário', data);
            return data;
        }

        if (response.status == 409){
            alert(data.error);
        }else if (response.status == 400){
            alert(data.error);
        }else if (response.status == 500){
            alert (data.error);
        }
        
        if(!response.ok){
            console.error("resposta inválida do servidor ao egistrar usuário")
            throw new Error(data.error || 'Falha no registro de usuário');
        }

    }catch(error){
        console.error("Erro ao obter resposta de registro do usuário do servidor", error);
        alert("falha ao registrar usuário");
    }
    return false;
}

export function logout(){
    const navigate = useNavigate();
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    navigate('/');
    
}