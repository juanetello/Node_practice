import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrastructure";

export class AuthRoutes {

    static get routes(): Router {
        console.log('routes.ts (presentation auth) get routes function');

        const router = Router();
        console.log('valor variable --> router', JSON.stringify(router));


        const datasource = new AuthDatasourceImpl();
        console.log('valor variable --> datasource', JSON.stringify(datasource));

        const authRepository = new AuthRepositoryImpl(datasource);
        console.log('valor variable --> authRepository', JSON.stringify(authRepository));


        const controller = new AuthController(authRepository);
        console.log('valor variable --> controller', JSON.stringify(controller));


        console.log('Auth Routes... FOLDER --> auth');

        // Definimos las rutas
        router.post('/login', controller.loginUser)
        router.post('/register', controller.registerUser)

        return router;
    }
}