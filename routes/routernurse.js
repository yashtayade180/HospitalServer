const express = require("express");
const routernurse = express.Router();
const nurses = require("../models/nurseSchema");

// routernurse.post("/registernurse", (req, res) => {
//   console.log(req.body);
// });

routernurse.post("/registernurse", async (req, res) => {
  const { name, sex, age, mobile, bloodgroup, city, desc } = req.body;

  if (!name || !age || !mobile || !desc) {
    res.status(422).json("plz fill the data");
  }

  try {
    const prenurse = await nurses.findOne({ name: name });
    console.log(prenurse);

    if (prenurse) {
      res.status(422).json("this is user is already present");
    } else {
      const addnurse = new nurses({
        name,
        sex,
        age,
        mobile,
        bloodgroup,
        city,
        desc,
      });

      await addnurse.save();
      res.status(201).json(addnurse);
      console.log(addnurse);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

routernurse.get("/getnurse", async (req, res) => {
  try {
    const nursedata = await nurses.find();
    res.status(201).json(nursedata);
    console.log(nursedata);
  } catch (error) {
    res.status(422).json(error);
  }
});

routernurse.get("/getnurse/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await nurses.findById({ _id: id });
    console.log(userindividual);
    res.status(201).json(userindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

routernurse.patch("/updatenurse/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await nurses.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});

routernurse.delete("/deletenurse/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await nurses.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = routernurse;
