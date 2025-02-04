import {Request, Response} from "express";
import BookDAO from "../dao/BookDAO";

async function getBooks (req:Request, res:Response){
    try{
        const bookList = await BookDAO.getAllBooks();
        if (bookList == null){
            res.status(400).json({error:"Failed to get all battles from user"});
        }else{
            res.status(200).json({allBooks:bookList});
        }
    }catch(error){
        console.error("Error when fetching all users from database.");
        res.status(500).json({error:"Internal server error."});
    }
}

export {getBooks}