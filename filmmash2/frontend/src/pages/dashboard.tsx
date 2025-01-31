
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const [user, setUser] = useState<{ id: number, username: string, email: string, password: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const[battleList, setBattleList] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchUser() {
        try {
            const response = await fetch("http://localhost:5000/dashboard", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                
            });

            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }

            const data = await response.json();
            setUser(data.user);

        } catch (error) {
          const errorMessage = (error as Error).message;
          setError(errorMessage);

          // Se o erro for relacionado à autenticação, redireciona para o login
          if (errorMessage.includes("log in")) {
              navigate("/login");
          }

        } finally {
            setLoading(false);
        }
    }

    async function fetchUserBattles(){
      console.log(localStorage.getItem("userId"))
      try {
        const response = await fetch("http://localhost:5000/get_user_battles", {
          method: "GET",
          credentials: "include",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok){
          throw new Error ("Failed to fetch users battles.")
        }

        const data = await response.json()
        setBattleList(data.userBattles)
        console.log(data.userBattles)
        console.log(battleList)
        
      } catch (error){
        console.error("Error fetching users battles:", error );
      } finally {
        setLoading(false)
      }
    }

    fetchUser();
    fetchUserBattles();
  }, []);

  if (loading) {
      return <p>Carregando...</p>;
  }

  if (!user) {
    navigate("/login");
    return <p>Erro ao carregar os dados do usuário.</p>;
  }


  return (
    <div className="justify-center w-full mx-auto items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96 text-center">
        <p>teste aqui:</p>
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">User Profile</h1>
            <div>
            <p className="text-gray-600"><strong>ID:</strong> {user.id}</p>
            <p className="text-gray-600"><strong>Username:</strong> {user.username}</p>
            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600"><strong>Password:</strong> {user.password}</p>
          </div>
      </div>
      {battleList.map((battle:any) => (
        <div className="bg-white shadow-md rounded-lg p-6 w-96 text-center">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4">{battle.id}</h1>
              <div>
              <p className="text-gray-600"><strong>Winner:</strong> {battle.winner_id}</p>
              <p className="text-gray-600"><strong>Loser:</strong> {battle.loser_id}</p>
              <p className="text-gray-600"><strong>User:</strong> {battle.user_id}</p>
              <p className="text-gray-600"><strong>battle date:</strong> {battle.battle_date}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
