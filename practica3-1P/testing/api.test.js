import dotenv from "dotenv/config"; dotenv

import Servidor from "../source/server.js";
const server = new Servidor();

import ModelGuia from "../source/models/guia.model.js";

import request from "supertest";
import mongoose from "mongoose";


describe('SERVICE REST OF TESTING', () => {

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI)
    })

    afterAll(async () => await mongoose.disconnect())


   describe('/GET', () => {
        test('Should response with a 200 status code', async () => {
            const response = await request(server.app).get('/api/v1/get-guias').send()
            expect(response.status).toBe(200);
        })

        test('Should response with the data', async () => {
            const response = await request(server.app).get('/api/v1/get-guias').send()
            expect(response.body).toBeInstanceOf(Array);
        })
    })

    describe('POST', () => {

        afterAll(async () => {
            await ModelGuia.deleteMany({ GUIA_NAME: "GUIA_PRUEBAS" })
        })

        const data = {
            GUIA_ID: "XYZ", GUIA_NAME: "GUIA_PRUEBAS", GUIA_FECHA: "00 DE HOY",
            GUIA_HORA: "05:00 -23:59", GUIA_RATING: "5/5",
            ID_CANAL: "64556dbb709693fb5fe11f2d", ID_PROGRAMA: "64556dc0709693fb5fe11f31"
        }

        test('Shouldresponse whit data inserted successfully', async () => {
            const response = await request(server.app).post('/api/v1/add-guia').send(data)
            expect(response.body._id).toBeDefined()
            expect(response.body.GUIA_NAME).toBe(data.GUIA_NAME)
        })
    })
})