require("dotenv").config()
const User = require("../model/User")


module.exports = {
    createUser: async (req, res) => {
        try {

            console.log(req.body)

            let userData = await User(req.body).save()

            console.log(userData)

            res.status(200).json(userData)
        } catch (error) {

            res.status(400).json({ error, message: "Bad request check body" })

        }
    }
}

