require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const nurses = require("./models/nurseSchema");
const users = require("./models/userSchema");
const docs = require("./models/docSchema");
const patients = require("./models/patientSchema");
const beds = require("./models/bedallotmentSchema");
const bloodbags = require("./models/bloodbagSchema");
const operations = require("./models/operationSchema");
const cors = require("cors");
const router = require("./routes/router");
const routernurse = require("./routes/routernurse");
const routerdoc = require("./routes/routerdoc");
const routerpatient = require("./routes/routerpatient");
const routerbed = require("./routes/routerbed");
const routerblood = require("./routes/routerblood");
const routerop = require("./routes/routerop");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const port = 8003;
//const port2 = 8080;
//const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("server start");
});

app.use(router);
app.use(routernurse);
app.use(routerdoc);
app.use(routerpatient);
app.use(authRoutes);
app.use(routerbed);
app.use(routerblood);
app.use(routerop);

app.listen(port, () => {
  console.log(`server is start port number ${port}`);
});

// mongodb+srv://yash:jeeiit180@cluster0.ytbvfey.mongodb.net/mernstack?retryWrites=true&w=majority
