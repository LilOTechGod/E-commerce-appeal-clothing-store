const express = require("express")
require("dotenv").config()
const cors = require("cors")
const routes = require("./routes")
const db = require("./config/dbConnection")


const { PORT } = process.env
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello")
})
app.use(routes)
db.on('error', console.error.bind(console, 'connection error:'));



db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);

    })
})