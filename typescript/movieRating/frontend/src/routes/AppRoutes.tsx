import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import MoviesPage from "../pages/moviesPage";
import User from "../models/User";
import ManageMoviesPage from "../pages/manageMoviesPage";
import ManageRatingsPage from "../pages/manageRatingsPage";

function AppRoutes(){
    const user:User = JSON.parse(sessionStorage.getItem('user')||'null');
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />

                <Route element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<DashboardPage/>} />
                    <Route path="/movies" element = {<MoviesPage/>}/>

                    {user?.permission === 'admin' && (
                        <>
                            <Route path="/manage_movies" element={<ManageMoviesPage />} />
                            <Route path="/manage_ratings" element={<ManageRatingsPage />} />
                        </>
                    )}

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;