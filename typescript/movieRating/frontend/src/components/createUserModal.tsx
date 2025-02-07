import { useState } from "react";
import { adminCreateNewUser } from "../services/adminServices";

function CreateUserModal(props:any){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [permission, setPermission] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // console.log(username, password, permission);
        if (!username || !password || !permission) {
            alert("Preencha todos os campos!");
            return;
        }
        if (permission === 'user' || permission === 'admin'){
            const success = await adminCreateNewUser(username, password, permission);
            if (success){
                alert('usuario criado com sucesso')
                window.location.reload();
            }else{
                alert('erro ao registrar usuário');
            }
        }else{
            alert('erro ao registrar permissão do usuario');
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

export default CreateUserModal;