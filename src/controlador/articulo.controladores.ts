import { Request, Response } from "express";
import { articulo } from "../entidades/articulo";

export const crearArticulo = async (req: Request, res: Response) => {
  try {
    const { titulo, descripcion } = req.body;
    const art = new articulo();
    art.titulo = titulo;
    art.descripcion = descripcion;
    await art.save();
    return res.json(art);
  } catch (error) {
    return res.status(500).json({ Error: "Error al crear articulo" });
  }
};

export const obtenerArticulos = async (req: Request, res: Response) => {
  try {
    const arts = await articulo.find();
    return res.json(arts);
  } catch (error) {
    return res.status(500).json({ Error: "Error al devolver los articulos" });
  }
};

export const actualizarActiculos = async (req: Request, res: Response) => {
  try {
    const { titulo, descripcion } = req.body;
    const art = await articulo.findOneBy({ id: parseInt(req.params.id) });
    if (!art) return res.status(404).json({ mensaje: "El articulo no existe" });
    art.titulo = titulo;
    art.descripcion = descripcion;
    await art.save();
    res.json(art);
  } catch (error) {
    return res.status(404).json({ mensaje: "Datos no encontrados" });
  }
};

export const eliminarArticulo = async (req: Request, res: Response) => {
  try {
    const art = await articulo.findOneBy({ id: parseInt(req.params.id) });
    if (!art) return res.status(404).json({ mensaje: "El articulo no existe" });
    await articulo.delete({ id: parseInt(req.params.id) });

    res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ mensaje: "Datos no encontrados" });
  }
};

export const buscarArticulo = async (req: Request, res: Response) => {
  try {
    const art = await articulo.findOneBy({ id: parseInt(req.params.id) });
    if (!art) return res.status(404).json({ mensaje: "El articulo no existe" });
    res.json(art);
  } catch (error) {
    return res.status(404).json({ mensaje: "Datos no encontrados" });
  }
};
