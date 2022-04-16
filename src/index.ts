import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Conexion a la base de datos");
    app.listen(3000);
    console.log("Servidor escucha en  le puerto 3000");
  } catch (error) {
      console.error(error)
  }
}

main();
