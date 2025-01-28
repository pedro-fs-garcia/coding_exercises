import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import BattlePage from './pages/battlePage';
import RatingsPage from './pages/ratingsPage';
import Dashboard from './pages/dashboard';
import ProtectedRoute from "./authentication/protectedRoute";

const Router = () => (
    <>    
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<LoginPage/>} />
                <Route path="/login" element = {<LoginPage/>} />
                <Route path="/battle" element = {<BattlePage/>} />
                <Route path="/ratings" element = {<RatingsPage/>} />
                <Route path="/dashboard" element = {
                    <ProtectedRoute isAuthenticated={!!localStorage.getItem('token')}>
                        <Dashboard />
                    </ProtectedRoute>
                }/>
            </Routes>
        </BrowserRouter>
    </>
);

export default Router;