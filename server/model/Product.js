const mongoose = require("mongoose")
let Schema = mongoose.Schema;

let productSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    imgurl: {
        type: String
    }

}, {
    toJSON: {
        virtuals: true,
    },
})

let Product = mongoose.model("product", productSchema);
module.exports = Product;

