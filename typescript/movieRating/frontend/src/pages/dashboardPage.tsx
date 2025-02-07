import User from "../models/User";
import AdminPage from "./adminPage";
import UserPage from "./userPage";

function DashboardPage(){
    const user:User = JSON.parse(sessionStorage.getItem('user')||'null');
    return(
        <div>
            <h2>Welcome, {user.username}!</h2>
            <p>Você tem acesso de {user.permission}</p>
            {user.permission === "admin" && <AdminPage/>}
            {user.permission === "user" && <UserPage/>}
        </div>
    );
}

export default DashboardPage;