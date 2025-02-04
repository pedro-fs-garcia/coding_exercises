import { NextFunction, Request, Response } from "express";
import BookDAO from "../dao/BookDAO";
import LoanDAO from "../dao/LoanDAO";

function processNewLoan(req:Request, res:Response){
    const params = req.params.bookId;
    console.log("params: ", params);
    const {userId, bookId} = req.body;
    console.log("user_id: ", userId, "____", "book_id: ", bookId);

    LoanDAO.registerNewLoan(userId, bookId);
    BookDAO.setBookUnavailable(bookId);
}

export {processNewLoan}