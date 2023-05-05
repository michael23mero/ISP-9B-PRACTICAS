import { Router } from "express";
import { addCanales, addProgramas } from "../controllers/data.controller.js";
import { addGuia, getGuias } from "../controllers/guia.controller.js";

const rutas = Router()

rutas.post('/add-canales', addCanales)
rutas.post('/add-programas', addProgramas)

rutas.post('/add-guia', addGuia)
rutas.get('/get-guias', getGuias)

export default rutas