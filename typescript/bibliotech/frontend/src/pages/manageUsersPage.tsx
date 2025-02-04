import { useEffect, useState } from "react";

import User from "../models/User";
import UserService from "../services/UserService";
import UserModal from "../components/userModal";
import CreateUserModal from "../components/createUserModal";

function ManageUsersPage(){
    const [users, setUsers] = useState<User[]|null>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [createUserModal, setCreateUserModal] = useState(false);

    const userService = new UserService();

    const loadUsers = async () => {
        const data = await userService.getUsers();
        console.log(data);
        setUsers(data);
    };

    const handleSaveUser = async (user: User) => {
        await userService.updateUser(user)
        window.location.reload();
    };

    const handleDeleteUser = async (id: number|null) => {
        if (confirm("Tem certeza que deseja excluir este usuário?")) {
            if(id){
                await userService.deleteUser(id);
            }
            window.location.reload();
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return (
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

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Nome</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Função</th>
                        <th className="border border-gray-300 p-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => (
                        <tr key={user.id} className="border border-gray-300">
                            <td className="p-2">{user.username}</td>
                            <td className="p-2">{user.email}</td>
                            <td className="p-2">{user.role}</td>
                            <td className="p-2">
                                <button
                                    onClick={() => {
                                        setSelectedUser(user);
                                        setIsModalOpen(true);
                                    }}
                                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                                >
                                    Editar
                                </button>
                                
                                <button
                                    onClick={() => {handleDeleteUser(user.id); window.location.reload()}}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <UserModal
                    user={selectedUser}
                    onSave={handleSaveUser}
                    onClose={() => setIsModalOpen(false)}
                />
            )}

            {createUserModal && (<CreateUserModal onClose={() => setCreateUserModal(false)} />)}
            
        </div>
    );
}

export default ManageUsersPage;