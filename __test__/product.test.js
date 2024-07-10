const request = require ("supertest")
const app = require ("../app")
const product = require ("../models/product")

describe("product API", () => {
    beforeEach(async () => {
        await product.deleteMany({})
    })

    it("should creat new product", async () => {
        const res = await request(app)
        .post("/api/products")
        .send({
            name: "Test Product",
            description: "Test Description",
            price: 100,
            category:"Test Category"
        })
        expect(res.statusCode).toEqaul(200)
        expect(res.body).toHaveProperty("_id")
    })
    it("is should fetch all product", async () => {
        const res = await request(app)
        .get("/api/products")
        expect(res.statusCode).toEqaul(200)
        expect(res.body).toBeInstanceOf(Array)
    })
})