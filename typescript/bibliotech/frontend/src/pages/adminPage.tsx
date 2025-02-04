import { useNavigate } from "react-router-dom";
import User from "../models/User";
import { useEffect } from "react";

function AdminPage(){
    const user: User | null = JSON.parse(sessionStorage.getItem('user') || "null");
    const navigate = useNavigate();

    // 🚀 Verifica se o usuário é admin, caso contrário, redireciona
    useEffect(() => {
        if (!user || user.role !== "admin") {
            navigate("/"); // Redireciona para a home se não for admin
        }
    }, [user, navigate]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Painel do Administrador</h1>
            <p>Bem-vindo, {user?.username}!</p>

            <div className="mt-6 space-y-4">
                <a href="/manage_users"><button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Gerenciar Usuários
                </button></a>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Configurações da Biblioteca
                </button>
            </div>
        </div>
    );
}

export default AdminPage;