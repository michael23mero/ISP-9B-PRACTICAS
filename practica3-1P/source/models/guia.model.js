import { Schema, model } from 'mongoose'

// La guía muestra la relación de un canal y un programa

const SchemaGuia = new Schema(
    {
        GUIA_ID: { type: String },

        GUIA_NAME: { type: String, trim: true },

        GUIA_FECHA: { type: String },

        GUIA_HORA: { type: String },

        GUIA_RATING: { type: String },

        ID_CANAL: { 
            type: Schema.Types.ObjectId, ref: 'collectionCanal'
        },

        ID_PROGRAMA: { 
            type: Schema.Types.ObjectId, ref: 'collectionPrograma'
        },
    },
    {
        versionKey: false
    }
)

export default model('collectionGuia', SchemaGuia)