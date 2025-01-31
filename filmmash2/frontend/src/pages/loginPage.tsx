import { useNavigate } from "react-router-dom";

function LoginPage(){
    const navigate = useNavigate();
    
    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;
        console.log({email, password})
        
        try{
            const response = await fetch("http://localhost:5000/login",{
                method:'POST',
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json()

            if(!response.ok){
                alert('Failed to login')
                throw new Error(data.error || 'Failed to login');
            }
            
            localStorage.setItem('token', data.loginToken);
            localStorage.setItem('userId', data.userId);
            console.log('Login successful:', data.loginToken)
            console.log(`token: ${localStorage.getItem("token")}`)
            console.log(`user id: ${localStorage.userId}`)
            navigate('/dashboard')
            
        }catch (error) {
            console.error('Login error:', error)
            alert('Failed to login')
        }
    }
    
    const handleRegister = async (event: React.FormEvent) => {
        event.preventDefault();
        const username = (document.getElementById("register-username") as HTMLInputElement).value;
        const email = (document.getElementById("register-email") as HTMLInputElement).value;
        const password = (document.getElementById("register-password") as HTMLInputElement).value;
        console.log({ username, email, password });
        
        try{
            const response = await fetch("http://localhost:5000/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username, email, password }),
            });
    
            const data = await response.json();

            if (response.status == 409){
                alert("user already exists")

            }else if(response.status == 400){
                alert("all fields are required")
            
            }else if (response.status == 500){
                alert("Failed to register user. Please try again later.")
            
            }else if (response.status == 201){
                window.location.reload()
                alert("user registered successfully. Please Login.")
                // navigate("/login")
            }
            
        } catch (error) {
          console.error('Error registering user:', error);
        }
    }

    return(
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
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