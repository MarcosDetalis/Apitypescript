import { DataSource } from "typeorm";
import { articulo } from "./entidades/articulo";

export const AppDataSource = new DataSource({
  type: "mariadb",
  host: "localhost",
  username: "root",
  password: "",
  port: 3306,
  database: "typeormdb",
  entities: [articulo],
  logging: true,
  synchronize: true,
});
