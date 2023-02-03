let dotenv=require('dotenv').config()
const express = require("express");
const app = express();
let cors = require("cors")
require("./src/connectionAndSchema/config");
const port = process.env.PORT || 5000
const formRoutes = require("./src/routes/crud");
const loginRoutes = require("./src/routes/login")
app.use(cors())

app.use("/",loginRoutes)
app.use("/task", formRoutes)

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;