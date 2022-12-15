const { application } = require("express");
const express = require("express");
const route = require("./router/route");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://sonal-plutonium:5dJokPsnG43EGYHE@cluster0.koc4qx2.mongodb.net/temp-tera-use-Kara-hu",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDb is Connected"))
  .catch((err) => err);

app.use("/", route);

app.listen(3000, function () {
  console.log("express is runnig on port" + 3000);
});
