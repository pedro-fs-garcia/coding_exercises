import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import AdminPage from "./adminPage";
import ReaderPage from "./readerPage";
import LibrarianPage from "./librarianPage";
import User from "../models/User";

function DashboardPage(){
    //const {user} = useAuth();
    const user:User|null = JSON.parse(localStorage.getItem('user') || "null");

    
    if (!user) return <Navigate to="/login"/>
    console.log("dashboard page")
    console.log(user)
    return (
        <div>
            <h2>Welcome, {user.username}!</h2>
            {user.role === "admin" && <AdminPage/>}
            {user.role === "librarian" && <LibrarianPage/>}
            {user.role === "reader" && <ReaderPage/>}
        </div>
    );
}

export default DashboardPage;