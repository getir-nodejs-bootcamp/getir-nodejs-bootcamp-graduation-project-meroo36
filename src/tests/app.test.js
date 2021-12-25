const request = require("supertest");
const app = require("../app");
require("dotenv").config();
const mongoose = require("mongoose")


beforeAll((done) => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    done();
})

describe("Test the POST method for the records route", () => {
    test("with expected payload", (done) => {
        request(app)
            .post("/api/records")
            .send({
                startDate: "2016-01-26",
                endDate: "2018-02-02",
                minCount: 2000,
                maxCount: 3500,
            })
            .then((response) => {
                expect(response.statusCode).toBe(200);
                expect(response.body.code).toBe(0);
                expect(response.body.records).toBeDefined();
                done();
            });
    })
    test("with unexpected payload", (done) => {
        request(app)
            .post("/api/records")
            .send({
                startDate: "2016-32-26",
                endDate: "2018-02-02",
                minCount: -200,
                maxCount: 3500,
            })
            .then((response) => {
                expect(response.statusCode).toBe(400);
                done();
            });
    })
})

afterAll((done) => {
    mongoose.connection.close();
    done();
});