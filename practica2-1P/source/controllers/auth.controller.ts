import { Request, Response } from "express";
import ModelUser, { IUser } from '../models/user.model'

import jwt from 'jsonwebtoken'

export const signup = async (req: Request, res:Response) => {
    const { ...data } = req.body
    const existe = await ModelUser.findOne({ username: data.username})

    if(existe) return res.status(400).json({msg: 'The user already exists'})
    const user:IUser = new ModelUser(data)

    user.password = await user.encryptPassword(data.password)
    const new_user = await user.save();

    return res.json(new_user)
}

export const signin = async (req: Request, res:Response) => {
    const user = await ModelUser.findOne({username: req.body.username})
    if(!user) return res.status(400).json({message: 'User not found'})

    const existe: boolean = await user.validatePassword(req.body.password)
    if(!existe) return res.status(400).json({message: 'Password is not valid'})

    const token: string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || 'TOKEN_SECRET', { expiresIn: 60 * 60 * 24 })

    return res.status(201).json({msg: 'Bienvenido', token, auth: true})
}

export const index = async (req: Request, res:Response) => {
    const user = await ModelUser.findById(req.userId, { password: 0})
    return res.status(200).json(user)
}