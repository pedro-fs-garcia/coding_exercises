import dotenv from 'dotenv';

dotenv.config();

export const frontendServer = process.env.FRONTEND_SERVER;
export const backendServer = process.env.BACKEND_SERVER;
export const jwtSecret = process.env.JWT_SECRET;
