// const UserModel = require(".../models/order/product/user");
// const mongoose = require("mongoose");

// describe("user schema test", () => {
//     beforeAll(async () => {
//         await mongoose.connect("process.env.Mongo_connect", { useNewUrlParser: true, useUnifiedTopology: true });
//     });

//     afterAll(async () => {
//         await mongoose.connection.close();
//     });

//     test("should create and save user to mongodb", async () => {
//         // Arrange
//         const userData = {
//             name: "John Smith",
//             title: "Mr",
//             age: 17,
//             date: "30/04/2024"};

//         // Act
//         const validUser = new UserModel(userData);
//         const savedUser = await validUser.save();

//         //Assert
//         expect(savedUser._id).toBeDefined();
//         expect (savedUser.name).toBe(userData.name);
//         expect (savedUser.title).toBe(userData.title);
//         expect (savedUser.age).toBe(userData.age);
//         expect (savedUser.date).toBeDefined();
//     });
// });