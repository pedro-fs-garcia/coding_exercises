import { useNavigate } from "react-router-dom";
import User from "../models/User";
import { useEffect, useState } from "react";
import { adminDeleteUser, adminUpdateUser, getAllUsers } from "../services/adminServices";
import UserModal from "../components/userModal";
import CreateUserModal from "../components/createUserModal";

function AdminPage(){
    const navigate = useNavigate();
    const user: User | null = JSON.parse(sessionStorage.getItem('user') || "null");
    const [selectedUser, setSelectedUser] = useState<User>(new User(0, "", "", "user"));
    const [userModal, setUserModal] = useState(false);
    const [createUserModal, setCreateUserModal] = useState(false);
    const [users, setUsers] = useState<User[]>([]);

    const handleSaveUser = async (user:User) => {
        await adminUpdateUser(user);
        console.log("updateUser:", user.username);
        // window.location.reload();
    };

    const handleDeleteUser = async (userId:number) => {
        const operation = await adminDeleteUser(userId);
        if(operation){
            window.location.reload();
        }
    };

    const loadUsers = async () => {
        const userList = await getAllUsers();
        console.log(userList)
        if (userList){
            setUsers(userList)
        }else{
            console.log("erro ao carregar usuários")
        }
    };

    // Verifica se o usuário é admin, caso contrário, redireciona
    useEffect(() => {
        if (!user || user.permission !== "admin") {
            navigate("/"); // Redireciona para a home se não for admin
        }
    }, [user, navigate]);
    
    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <section>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Painel do Administrador</h1>
                <p>Bem-vindo, {user?.username}!</p>
            </div>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Gerenciar Usuários</h1>
                <button
                    onClick={() => {
                        setCreateUserModal(true);
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
                >
                    + Adicionar Usuário
                </button>
                <a href="/manage_movies">Manage movies</a>

                <a href="/manage_ratings">Manage ratings</a>

                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Id</th>
                            <th className="border border-gray-300 p-2">Nome</th>
                            <th className="border border-gray-300 p-2">Senha</th>
                            <th className="border border-gray-300 p-2">Função</th>
                            <th className="border border-gray-300 p-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => (
                            <tr key={user.id} className="border border-gray-300">
                                <td className="p-2">{user.id}</td>
                                <td className="p-2">{user.username}</td>
                                <td className="p-2">{user.password}</td>
                                <td className="p-2">{user.permission}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => {
                                            setSelectedUser(user);
                                            setUserModal(true);
                                        }}
                                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                                    >
                                        Editar
                                    </button>
                                    
                                    <button
                                        onClick={() => {handleDeleteUser(user.id)}}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {userModal && (
                    <UserModal
                        user={selectedUser}
                        onSave={handleSaveUser}
                        onClose={() => setUserModal(false)}
                    />
                )}

                {createUserModal && (<CreateUserModal onClose={() => setCreateUserModal(false)} />)}
                
            </div>
        </section>
    );
}

export default AdminPage;