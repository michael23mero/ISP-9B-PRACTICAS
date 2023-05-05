import ModelGuia from "../models/guia.model.js";

export const addGuia = async (req, res) => {
    try {
        const { ...data } = req.body
        const guia = await ModelGuia.create(data)
        return res.status(201).json(guia)   
    } catch (err) {
        return res.status(500).json(err.message)
    }
}

export const getGuias = async (req, res) => {
    const data = await ModelGuia.find().populate('ID_CANAL').populate('ID_PROGRAMA')

    if(data.length >= 1) return res.status(200).json(data)

    return res.status(200).json({message: 'Data not found'})
}