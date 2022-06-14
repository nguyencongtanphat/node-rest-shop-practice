const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const siteRouters = require("./API/routes/site");
const productsRouters = require("./API/routes/products");
const ordersRouters = require("./API/routes/orders");
const usersRouters = require("./API/routes/users");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

//connect to db
mongoose
  .connect(process.env.DB_URL)
  .then((result) => {
    console.log("connect successful");
  })
  .catch((err) => {
    console.log(err);
    console.log("connect fail");
  });
//middleware
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/API/Public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes

//[user]
app.use("/users", usersRouters);
//[order]
app.use("/orders", ordersRouters);
//[products]
app.use("/products", productsRouters);
//[home]
app.use("/", siteRouters);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
