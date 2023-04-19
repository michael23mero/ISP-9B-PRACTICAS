import { Router, Request, Response } from "express";

import { index, signin, signup } from "../controllers/auth.controller";
import { validateToken } from "../middlewares/verifyAuth";

const rutas:Router = Router()

rutas.get('/index', [ validateToken ], index)
rutas.post('/signup', signup)
rutas.post('/signin', signin)

rutas.get('/', (req: Request, res: Response) => {
    res.send('<h1>Servicio Rest Simple con NodeJS, ISP-9B</h1>')
})

export default rutas