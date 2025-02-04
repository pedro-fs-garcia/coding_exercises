import { useState } from "react";
import User from "../models/User";

function UserModal(props: any){
    const [formData, setFormData] = useState<User>(props.user);
    const[email, setEmail] = useState(props.user.email);
    const [username, setUsername] = useState(props.user.username);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSave(formData);
        window.location.reload();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">
                    {props.user ? "Editar Usuário" : "Criar Usuário"}
                </h2>
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
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
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

export default UserModal;