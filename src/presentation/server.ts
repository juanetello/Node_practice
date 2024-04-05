import express, { Router } from "express";

interface Options {
    port?: number;
    // cuanto tiene el ? es opcional
    // en caso de que no lo tenga es OBLIGATORIO que el campo este
    routes: Router;
}

export class Server {
    
    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port = 3000, routes } = options;

        this.port = port;
        this.routes = routes;
    }

    async start() {

        console.log('server.ts start function');

        // Middlewares
        this.app.use(express.json);
        // this.app.use(express.urlencoded({ extended: true }));x-www-formurlencoded

        console.log('linea 28', JSON.stringify(this.routes));

        // Uso de rutas definidas
        this.app.use(this.routes);

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
}