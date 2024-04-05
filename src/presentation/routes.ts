import { Router } from "express";
import { AuthRoutes } from "./auth/routes";


export class AppRoutes {
    static get routes(): Router {
        console.log('soutes.ts get routes function');
        const router = Router();

        // Definimos las rutas
        router.use('/api/auth', AuthRoutes.routes)
        // router.use('api/users')

        return router;
    }
}