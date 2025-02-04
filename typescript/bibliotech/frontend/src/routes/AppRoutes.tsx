import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import ManageUsersPage from "../pages/manageUsersPage";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />

                <Route element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<DashboardPage/>} />
                    <Route path="/manage_users" element={<ManageUsersPage/>} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;