import express from 'express';
import dotenv from "dotenv";
import { authLogin, authRegister, logout, refreshAccessToken, verifyToken } from '../services/authServices';
import { deleteUser, getUsers, registerNewUser, updateUser } from '../services/userServices';
import { getBooks } from '../services/bookServices';
import { processNewLoan } from '../services/loanServices';

const apiRouter = express.Router();

apiRouter.get("/api/admin/get_users", verifyToken, getUsers);
apiRouter.post("/api/admin/register_new_user", verifyToken, registerNewUser);
apiRouter.put("/api/admin/update_user", verifyToken, updateUser);
apiRouter.delete("/api/admin/delete_user", verifyToken, deleteUser);

apiRouter.get("/api/books/get_books", verifyToken, getBooks);
apiRouter.post("/api/books/borrow/:bookId", verifyToken, processNewLoan);


export default apiRouter;