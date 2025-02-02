import dotenv from 'dotenv';
import mysql from "mysql2/promise";

dotenv.config()

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

const table_users = `CREATE TABLE IF NOT EXISTS users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    username VARCHAR(100) NOT NULL,
                    email VARCHAR(100) UNIQUE NOT NULL,
                    password VARCHAR(255) NOT NULL,
                    role ENUM('reader', 'librarian', 'admin') NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )`

const table_books = `CREATE TABLE IF NOT EXISTS books (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    author VARCHAR(255) NOT NULL,
                    publication_year YEAR NOT NULL,
                    genre VARCHAR(100),
                    available BOOLEAN DEFAULT TRUE,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )`

const table_loans = `CREATE TABLE IF NOT EXISTS loans (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    user_id INT NOT NULL,
                    book_id INT NOT NULL,
                    loan_date DATE DEFAULT (CURRENT_DATE),
                    return_date DATE NULL,
                    status ENUM('borrowed', 'returned') DEFAULT 'borrowed',
                    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
                    )`


async function createDatabase(){
    const dbConnection = mysql.createPool({
        host: host,
        user: user,
        password:password
    });
    try{
        const [result] = await dbConnection.query('CREATE DATABASE bibliotech');
        return true;
    } catch (error){
        console.log(error)
    }
    return false;
}

async function createTables(){
    const dbConnecion = mysql.createPool({
        host:host,
        user:user,
        password:password,
        database:database
    });

    try{
        const [users] = await dbConnecion.query(table_users);
        const [books] = await dbConnecion.query(table_books);
        const [loans] = await dbConnecion.query(table_loans);
        return true
    }catch(error){
        console.log(error);
    }
    return false;
}

async function init_db(){
    try{
        createDatabase();
        createTables();

    }catch(error){
        console.log(error);
    }
}

export default init_db;