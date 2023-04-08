import { Schema, model } from 'mongoose'

const SchemaCanal = new Schema(
    {
        CANAL_ID: { type: String },

        CANAL_NAME: { type: String, trim: true },
    },
    {
        versionKey: false
    }
)

export default model('collectionCanal', SchemaCanal)