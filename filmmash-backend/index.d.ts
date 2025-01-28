import * as express from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: Record<string, any>; // Ou use o tipo específico dos seus dados do usuário
        }
    }
}

