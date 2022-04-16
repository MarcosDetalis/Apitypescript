import { Router } from "express";
import {
  actualizarActiculos,
  buscarArticulo,
  crearArticulo,
  eliminarArticulo,
  obtenerArticulos,
} from "../controlador/articulo.controladores";
const router = Router();

router.post("/articulos", crearArticulo);
router.get("/articulos", obtenerArticulos);
router.put("/articulos/:id", actualizarActiculos);
router.delete("/articulos/:id", eliminarArticulo);
router.get("/articulos/:id", buscarArticulo);
export default router;
