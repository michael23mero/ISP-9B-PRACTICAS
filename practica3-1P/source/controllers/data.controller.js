import ModelCanal from "../models/canal.model.js";
import ModelPrograma from "../models/programa.model.js";


const canales =  [
    {
        "CANAL_ID": "1", "CANAL_NAME": "CANAL ANIME"
    },
    {
        "CANAL_ID": "2", "CANAL_NAME": "CANAL CARTOON"
    }
]

const programas =  [
    {
        "PROGRAMA_ID": "101", "PROGRAMA_TV": "SNK", "PROGRAMA_CATEGORIA": "ANIME", "PROGRAMA_TIPO": "AVENTURA"
    },
    {
        "PROGRAMA_ID": "102", "PROGRAMA_TV": "DBZ", "PROGRAMA_CATEGORIA": "ANIME", "PROGRAMA_TIPO": "AVENTURA X2"
    },
    {
        "PROGRAMA_ID": "111", "PROGRAMA_TV": "ESCANDALOSOS", "PROGRAMA_CATEGORIA": "CARTOON", "PROGRAMA_TIPO": "PARA MAYORES DE 10"
    }
]

export const addCanales = async (req, res) => {
    await ModelCanal.insertMany(canales)
    return res.status(201).json({msg: 'Data of canals created successfully'})
}

export const addProgramas = async (req, res) => {
    await ModelPrograma.insertMany(programas)
    return res.status(201).json({msg: 'Data of programas created successfully'})
}