import { Router } from "express";
import { addCanal, getCanales } from "../controllers/canal.controller.js";

const rutas = Router()

rutas.post('/add-canal', addCanal)
rutas.get('/get-canales', getCanales)

export default rutas