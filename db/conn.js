const mongoose = require("mongoose");

//const DB = process.env.DATABASE;
const DB =
  "mongodb+srv://yash:jeeiit180@cluster0.ytbvfey.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
