const unit = require("./unit")

describe("UserModel", () => {
    test("should have 4 users", () => {
        const numberOfUsers = user.getUsers().length
        expect(numberOfUsers).tobe(4)
    })
})