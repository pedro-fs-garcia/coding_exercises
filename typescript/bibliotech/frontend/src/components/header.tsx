import User from "../models/User";
import AuthService from "../services/AuthService";

function Header() {
  //const {user} = useAuth();
  const handleLogout = () => {
    AuthService.logout();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem('user');
    window.location.href = "/login";
  };
  
  const user:User|null = JSON.parse(sessionStorage.getItem('user') || "null");

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Bibliotech</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="/dashboard" className="hover:underline">Dashboard</a>
            </li>

            {user?.role === "admin" && (
                    <a href="/dashboard" className="mr-4 hover:underline">
                        Painel Admin
                    </a>
            )}

            {user ? (
              <li>
                <button onClick={handleLogout} className="hover:underline">Logout</button>
              </li>
            ) : (
              <li>
                <a href="/login" className="hover:underline">Login</a>
              </li>
            )}

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
