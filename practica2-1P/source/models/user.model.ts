import { Schema, model, Document } from "mongoose";
import bcrypt from 'bcryptjs';

export interface IUser extends Document{
    fullname: string;
    username: string;
    password: string;
    encryptPassword(password: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}

const SchemaUser =  new Schema(
    {
        fullname: { type: String, trim: true, uppercase: true },

        username: { type: String, trim: true },

        password: { type: String, trim: true }   
    },
    {
        versionKey: false,
    }
)

SchemaUser.methods.encryptPassword = async (password: string): Promise<string> =>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

SchemaUser.methods.validatePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password)
}

export default model<IUser>('collectionUser', SchemaUser)