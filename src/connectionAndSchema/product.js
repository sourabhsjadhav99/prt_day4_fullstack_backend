const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    task: { type: String, required:true },
    status: { type: String },
    time: { type: String }
});
module.exports = mongoose.model("tasks", productSchema);
