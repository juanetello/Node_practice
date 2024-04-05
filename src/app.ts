import { envs } from "./config";
import { MongoDatabase } from "./data/mongodb";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

// Funcion anoninma autoinvocada que va a llamar al main
(()=> {
  main();
})()

async function main() {
  console.log('app.ts main function -----');

    // Data Base connect
    await MongoDatabase.connect({
      dbName:envs.MONGO_DB_NAME,
      mongoUrl:envs.MONGO_URL,
    })

    // Server start
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    })
      .start()

}
