import express from "express";
import morgan from "morgan";
import cors from "cors";
import artRutas from "./rutas/articulo.rutas";
import { json } from "stream/consumers";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(artRutas);
export default app;
