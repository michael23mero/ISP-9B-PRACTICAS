import mongoose from "mongoose";

export const dbconnection = async (req, res) => {
    try{
        await mongoose.set("strictQuery", false).connect(process.env.MONGO_URI)
        console.log('Conexion exitosa con database')
    }catch(err){
        console.error('Error de conexion con base de datos' + err.message);
    }
}