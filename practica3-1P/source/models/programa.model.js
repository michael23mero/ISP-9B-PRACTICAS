import { Schema, model } from 'mongoose'

const SchemaPrograma = new Schema(
    {
        PROGRAMA_ID: { type: String },

        PROGRAMA_TV: { type: String, trim: true },

        PROGRAMA_CATEGORIA: { type: String, trim: true },

        PROGRAMA_TIPO: { type: String, trim: true },
    },
    {
        versionKey: false
    }
)

export default model('collectionPrograma', SchemaPrograma)