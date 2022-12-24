const express = require("express");
const routerop = express.Router();
const operations = require("../models/operationSchema");

routerop.post("/registerop", async (req, res) => {
  const { patientname, drname, desc, status, remark, date } = req.body;

  if (!patientname || !drname || !desc || !status || !remark || !date) {
    res.status(422).json("plz fill the data");
  }

  try {
    const predoc = await operations.findOne({ patientname: patientname });
    console.log(predoc);

    if (predoc) {
      res.status(422).json("This patient is already present");
    } else {
      const adddoc = new operations({
        patientname,
        drname,
        desc,
        status,
        remark,
        date,
      });

      await adddoc.save();
      res.status(201).json(adddoc);
      console.log(adddoc);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

routerop.get("/getop", async (req, res) => {
  try {
    const docdata = await operations.find();
    res.status(201).json(docdata);
    console.log(docdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerop.get("/getop/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const docindividual = await operations.findById({ _id: id });
    console.log(docindividual);
    res.status(201).json(docindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerop.patch("/updateop/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateddoc = await operations.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateddoc);
    res.status(201).json(updateddoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerop.delete("/deleteop/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await operations.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = routerop;
