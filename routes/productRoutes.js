const express = require ("express")
const {getProducts, creatProduct, updateProduct, deleteProduct} = require ("../controllers/productcontroller")

const router = express.Router()

router.get("/", getProducts)
router.post("/", creatProduct)
router.put("/", updateProduct)
router.delete("/", deleteProduct)

module.exports = router