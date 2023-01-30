const router = require("express").Router();
const { createUser } = require("../controller/userController")
const { createProduct } = require("../controller/createProduct")



router.post("/api/users", createUser)
// router.post("/api/products", createProduct)



module.exports = router