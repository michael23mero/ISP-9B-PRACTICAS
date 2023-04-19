import express from 'express';

import RutasIndex from './routes/auth'

const port = process.env.PORT || 4000

export class Servidor{
    app: express.Application
    
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.json())
    }

    routes(){
        this.app.use('/api/v1', RutasIndex)
    }

    listen(){
        this.app.listen(port, () => console.log(`Servidor a su servicio en el puerto ${port}`))
    }
}