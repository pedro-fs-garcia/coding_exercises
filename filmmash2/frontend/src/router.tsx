import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";

const Router = () => (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/login" element={<LoginPage/>} />
            </Routes>
        </BrowserRouter>
    </>
);

export default Router;