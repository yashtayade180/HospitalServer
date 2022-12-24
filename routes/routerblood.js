const express = require("express");
const routerblood = express.Router();
const bloodbags = require("../models/bloodbagSchema");

routerblood.post("/registerblood", async (req, res) => {
  const { bloodgroup, quantity } = req.body;

  if (!bloodgroup || !quantity) {
    res.status(422).json("plz fill the data");
  }

  try {
    const predoc = await bloodbags.findOne({ bloodgroup: bloodgroup });
    console.log(predoc);

    if (predoc) {
      res.status(422).json("This bloodgroup is already present");
    } else {
      const adddoc = new bloodbags({
        bloodgroup,
        quantity,
      });

      await adddoc.save();
      res.status(201).json(adddoc);
      console.log(adddoc);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

routerblood.get("/getblood", async (req, res) => {
  try {
    const docdata = await bloodbags.find();
    res.status(201).json(docdata);
    console.log(docdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerblood.get("/getblood/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const docindividual = await bloodbags.findById({ _id: id });
    console.log(docindividual);
    res.status(201).json(docindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerblood.patch("/updateblood/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateddoc = await bloodbags.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateddoc);
    res.status(201).json(updateddoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerblood.delete("/deleteblood/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await bloodbags.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = routerblood;
