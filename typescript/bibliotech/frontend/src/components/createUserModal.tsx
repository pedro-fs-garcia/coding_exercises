import { useState } from "react";
import UserService from "../services/UserService";

function CreateUserModal(props:any){
    const [username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[role, setRole] = useState("reader");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const userService = new UserService();
        console.log(username, email, password, role);
        const success = await userService.registerNewUser(username, email, password, role);
        if (success){
            // alert('usuario criado com sucesso')
            window.location.reload()
        }else{
            alert('erro ao registrar usuário')
        }
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Criar Usuário</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-full border p-2 mb-2"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="block w-full border p-2 mb-2"
                    >
                        <option value="reader">Leitor</option>
                        <option value="librarian">Bibliotecário</option>
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

export default CreateUserModal;