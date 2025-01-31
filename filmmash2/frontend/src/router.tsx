import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import Dashboard from "./pages/dashboard";
import BattlePage from "./pages/battlePage";
import RatingsPage from "./pages/ratingsPage";

const Router = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/battle" element={<BattlePage/>} />
                <Route path="/ratings" element={<RatingsPage/>} />
            </Routes>
        </BrowserRouter>
    </>
);

export default Router;