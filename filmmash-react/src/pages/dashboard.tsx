import { useEffect, useState } from 'react';

class User {
    public id:number;
    public username: String;
    public email:String;
    public password:String;

    constructor(){
        this.id = 0
        this.username = ""
        this.email = ""
        this.password = ""
    }
}



function Dashboard(){
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUserProfile = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem('token'); // Recupera o token do localStorage
            if (!token) {
                throw new Error('User not authenticated');
            }

            const response = await fetch('http://localhost:5000/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Error fetching user profile: ${response.statusText}`);
            }

            const data: User = await response.json();
            setUser(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="user-profile">
            <h1>Welcome, {user?.username}!</h1>
            <p>Email: {user?.email}</p>
            <p>Joined on: {user?.id}</p>
        </div>
    );
};

export default Dashboard;
