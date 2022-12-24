const express = require("express");
const routerpatient = express.Router();
const patients = require("../models/patientSchema");

routerpatient.post("/registerpatient", async (req, res) => {
  const { name, sex, age, mobile, bloodgroup, city, desc } = req.body;

  if (!name || !age || !mobile || !desc) {
    res.status(422).json("plz fill the data");
  }

  try {
    const predoc = await patients.findOne({ name: name });
    console.log(predoc);

    if (predoc) {
      res.status(422).json("this is user is already present");
    } else {
      const adddoc = new patients({
        name,
        sex,
        age,
        mobile,
        bloodgroup,
        city,
        desc,
      });

      await adddoc.save();
      res.status(201).json(adddoc);
      console.log(adddoc);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

routerpatient.get("/getpatient", async (req, res) => {
  try {
    const docdata = await patients.find();
    res.status(201).json(docdata);
    console.log(docdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerpatient.get("/getpatient/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const docindividual = await patients.findById({ _id: id });
    console.log(docindividual);
    res.status(201).json(docindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerpatient.patch("/updatepatient/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateddoc = await patients.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateddoc);
    res.status(201).json(updateddoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerpatient.delete("/deletepatient/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await patients.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = routerpatient;
