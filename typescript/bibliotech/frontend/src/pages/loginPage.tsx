import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import { useAuth } from "../contexts/authContext";
import User from "../models/User";

function LoginPage(){
    const navigate = useNavigate();
    const {login} = useAuth();
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();

        const data = await AuthService.login(email, password);
        login(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        
        if (data.user){
            navigate("/dashboard");
            const testUser: User | null = JSON.parse(localStorage.getItem('user') || "null");
            console.log(testUser);
        }else{
            alert("credenciais inválidas");
        }
    };
    
    const handleRegister = async (event: React.FormEvent) => {
        event.preventDefault();

        const registerUser = await AuthService.register(username, email, password);
        
        if (registerUser){
            navigate("/")
        }
    };

    return(
        <div className="flex flex-col md:flex-row bg-gray-100">
            {/* Login Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white shadow-md md:p-16 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
                <form className="w-3/4" onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                        </label>
                        <input
                        type="password"
                        id="password"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </form>
            </div>

            {/* Register Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-900 text-white md:p-16 p-8">
                <h2 className="text-3xl font-bold mb-6">Register</h2>
                <form className="w-3/4 text-black" onSubmit={handleRegister}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-white mb-1">
                    Username
                    </label>
                    <input
                    type="text"
                    id="register-username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Choose a username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="register-email" className="block text-sm font-medium text-white mb-1">
                    Email
                    </label>
                    <input
                    type="email"
                    id="register-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="register-password" className="block text-sm font-medium text-white mb-1">
                    Password
                    </label>
                    <input
                    type="password"
                    id="register-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-white text-blue-500 py-2 rounded-md hover:bg-gray-100 transition"
                >
                    Register
                </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;