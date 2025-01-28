import { Movie, Arena } from "../models/models";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const BattlePage: React.FC = () => {
  const [arena, setArena] = useState<Arena | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Para redirecionamento

  const fetchArena = async () => {
      try {
          setLoading(true);

          // Recupera o token de autenticação do localStorage
          const token = localStorage.getItem("authToken");
          if (!token) {
              throw new Error("User not authenticated. Please log in.");
          }

          const response = await fetch("http://localhost:5000/get_arena_json", {
              method: "GET",
              headers: {
                  Authorization: `Bearer ${token}`, // Envia o token no cabeçalho
              },
          });

          if (!response.ok) {
              if (response.status === 401) {
                  throw new Error("Session expired. Please log in again.");
              } else {
                  throw new Error(`Error fetching arena: ${response.statusText}`);
              }
          }

          const data: Arena = await response.json();
          setArena(data);
      } catch (err) {
          const errorMessage = (err as Error).message;
          setError(errorMessage);

          // Se o erro for relacionado à autenticação, redireciona para o login
          if (errorMessage.includes("log in")) {
              navigate("/login");
          }
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      fetchArena();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

    async function postWinner1(){
        if(arena){
            let postArena:Arena = new Arena(arena.movie1, arena.movie2);
            postArena.winner = arena.movie1.id;
            let jsonObj = postArena.toJson()
            try{
                const response = await fetch("http://localhost:5000/post_winner", {
                    method:"POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({arena:jsonObj}),
                });

                const data = await response.json();
                if (response.ok) {
                    console.log('winner registered successfylly:', data);
                    window.location.reload()
                  } else {
                    console.error('movie battle winner failed:', data.error);
                    alert(`Error when registering winner: ${data.error}`)
                  }
            } catch (error) {
                console.error('Server communication error:', error);
                alert("Something went wrong when trying to process your request.")
            }
        }
    }

    async function postWinner2(){
        if(arena){
            let postArena = new Arena(arena.movie1, arena.movie2);
            postArena.winner = arena.movie2.id;
            let jsonObj = postArena.toJson()
            try{
                const response = await fetch("http://localhost:5000/post_winner", {
                    method:"POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({arena:jsonObj}),
                });

                const data = await response.json();
                if (response.ok) {
                    console.log('winner registered successfylly:', data);
                    window.location.reload()
                  } else {
                    console.error('movie battle winner failed:', data.error);
                    alert(`Error when registering winner: ${data.error}`)
                  }
            } catch (error) {
                console.error('Server communication error:', error);
                alert("Something went wrong when trying to process your request.")
            }
        }
    }


    return (
        <div>
          {arena && (
            <div className="flex space-x-8">
              <div className="w-1/2 text-center">
                <button onClick={postWinner1}>
                    <img
                        src={arena.movie1.poster}
                        alt={arena.movie1.title}
                        className="mx-auto w-40 h-60 object-cover"
                        />
                        <h2 className="text-lg font-bold">{arena.movie1.title}</h2>
                        <p>Director: {arena.movie1.director}</p>
                        <p>Year: {arena.movie1.year}</p>
                        <p>ELO: {arena.movie1.elo}</p>
                </button>
              </div>

              <div className="w-1/2 text-center">
                <button onClick={postWinner2}>
                    <img
                    src={arena.movie2.poster}
                    alt={arena.movie2.title}
                    className="mx-auto w-40 h-60 object-cover"
                    />
                    <h2 className="text-lg font-bold">{arena.movie2.title}</h2>
                    <p>Director: {arena.movie2.director}</p>
                    <p>Year: {arena.movie2.year}</p>
                    <p>ELO: {arena.movie2.elo}</p>
                </button>
              </div>
            </div>
          )}
        </div>
      );
};

export default BattlePage;