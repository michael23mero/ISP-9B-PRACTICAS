import express from "express";
import cors from "cors";

import rutas from './routes/index.js'

export default class Servidor{
    constructor(){
        this.app = express();
        this.port =  process.env.PORT || 4000

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api/v1', rutas)
        this.app.use((req, res) => {
            return res.status(404).json({ messages: 'Page not found' });
        })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        });
    }
}