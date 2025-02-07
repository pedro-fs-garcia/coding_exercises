import { useState } from "react";
import User from "../models/User";
import { adminUpdateUser } from "../services/adminServices";

function UserModal(props: any){
    const [formData, setFormData] = useState<User>(props.user);
    const [password, setPassword] = useState(props.user.password);
    const [username, setUsername] = useState(props.user.username);
    const [permission, setPermission] = useState(props.user.permission);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userUpdate = new User(props.user.id, username, password, permission);
        console.log("usuario que será atualixado:", userUpdate);
        //props.onSave(userUpdate);
        // window.location.reload();
        await adminUpdateUser(userUpdate);
        console.log("updateUser:", userUpdate.username);
        window.location.reload();
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">
                    {props.user ? "Editar Usuário" : "Criar Usuário"}
                </h2>
                <form onSubmit={handleSubmit}>
                    <p>user id: {formData.id}</p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-full border p-2 mb-2"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full border p-2 mb-2"
                    />
                    <select
                        name="permission"
                        value={permission}
                        onChange={(e) => setPermission(e.target.value)}
                        className="block w-full border p-2 mb-2"
                    >
                        <option value=""></option>
                        <option value="user">Usuario</option>
                        <option value="admin">Administrador</option>
                    </select>
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                        Salvar
                    </button>
                    <button onClick={props.onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md">
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserModal;