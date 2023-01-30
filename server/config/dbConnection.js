const mongoose = require("mongoose")
require("dotenv").config()
const { MONGODB_URI } = process.env

console.log(MONGODB_URI)



mongoose.set("strictQuery", false);
mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;
