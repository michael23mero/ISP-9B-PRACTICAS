import ModelCanal from "../models/canal.model.js";

export const addCanal = async (req, res) => {
    try{
        const { ...data } = req.body
        const existe = await ModelCanal.findOne({CANAL_ID: data.CANAL_ID})
        if(existe){
            return res.status(400).json({msg: `The canal ${existe.CANAL_ID} already exists`})
        }
        const canal = new ModelCanal(data)
        await canal.save()
        return res.status(201).json({msg: 'Canal created successfully', canal})
    }catch(err){
        return res.status(500).json({msg: err.message});
    }
}

export const getCanales = async (req, res) => {
    const data = await ModelCanal.find()
    return res.status(200).json(data)
}