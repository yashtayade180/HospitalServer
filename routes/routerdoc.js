const express = require("express");
const routerdoc = express.Router();
const docs = require("../models/docSchema");

routerdoc.post("/registerdoc", async (req, res) => {
  const { name, sex, age, mobile, bloodgroup, city, desc } = req.body;

  if (!name || !age || !mobile || !desc) {
    res.status(422).json("plz fill the data");
  }

  try {
    const predoc = await docs.findOne({ name: name });
    console.log(predoc);

    if (predoc) {
      res.status(422).json("this is user is already present");
    } else {
      const adddoc = new docs({
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

routerdoc.get("/getdoc", async (req, res) => {
  try {
    const docdata = await docs.find();
    res.status(201).json(docdata);
    console.log(docdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerdoc.get("/getdoc/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const docindividual = await docs.findById({ _id: id });
    console.log(docindividual);
    res.status(201).json(docindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerdoc.patch("/updatedoc/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateddoc = await docs.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateddoc);
    res.status(201).json(updateddoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerdoc.delete("/deletedoc/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await docs.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = routerdoc;
