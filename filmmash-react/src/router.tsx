import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import BattlePage from './pages/battlePage';
import RatingsPage from './pages/ratingsPage';
import Dashboard from './pages/dashboard';

const Router = () => (
    <>    
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<LoginPage/>} />
                <Route path="/login" element = {<LoginPage/>} />
                <Route path="/battle" element = {<BattlePage/>} />
                <Route path="/ratings" element = {<RatingsPage/>} />
                <Route path="/dashboard" element = {<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    </>
);

export default Router;