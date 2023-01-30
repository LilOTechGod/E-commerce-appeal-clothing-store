const router = require("express").Router();
const { createUser } = require("../controller/userController")
const { createProduct, getProducts } = require("../controller/createProduct")



router.post("/api/users", createUser)

router.post("/api/products", createProduct)
router.get("/api/products", getProducts)




module.exports = router