import {Request, Response} from "express";
import UserDAO from "../dao/UserDAO";
import User from "../models/User";

async function getUsers(req:Request, res:Response){
    try{
        const userList = await UserDAO.getAllUsers();
        if (userList == null){
            res.status(400).json({error:"Failed to get all battles from user"});
        }else{
            res.status(200).json({allUsers:userList});
        }
    
    }catch(error){
        console.error("Error when fetching all users from database.");
        res.status(500).json({error:"Internal server error."});
    }
}

async function registerNewUser(req:Request, res:Response):Promise<any>{
    const {username, email, password, role} = req.body;
    console.log(username, email, password, role);
    try{
        if (!username || !email || !password || !role) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        if (await UserDAO.existingUser(email)){
            return res.status(409).json({error:"Email already registered."})
        }

        const success = await UserDAO.registerNewUser(username, email, password, role);
        if (success) {
            console.log("registered new user.")
            return res.status(201).json({message:"user registered. Please login"});
        }else{
            return res.status(500).json({error:"Server error. Please try again later."});
        }

    }catch (error){
        console.error("Error when registering new user to database.");
        return res.status(500).json({error:"Internal server error."});
    }
}

async function updateUser(req:Request, res:Response):Promise<any>{
    const {user} = req.body;
    const updateUser = user as User;
    console.log(updateUser);

    UserDAO.updateUser(updateUser);
}

async function deleteUser(req:Request, res:Response):Promise<any>{
    console.log("inicia userServices.deleteUser")
    const {id} = req.body;
    console.log("pega id como req.body")
    UserDAO.deleteUser(id);
    console.log("finaliza userServices.deleteUser");
}

export {getUsers, registerNewUser, updateUser, deleteUser}