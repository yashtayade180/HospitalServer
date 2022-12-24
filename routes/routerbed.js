const express = require("express");
const routerbed = express.Router();
const beds = require("../models/bedallotmentSchema");

routerbed.post("/registerbed", async (req, res) => {
  const { bednum, type, name, allotdate, dischargedate, desc } = req.body;

  if (!name || !bednum || !allotdate || !type || !dischargedate) {
    res.status(422).json("plz fill the data");
  }

  try {
    const predoc = await beds.findOne({ bednum: bednum });
    console.log(predoc);

    if (predoc) {
      res.status(422).json("this bed is already alloted");
    } else {
      const adddoc = new beds({
        bednum,
        type,
        name,
        allotdate,
        dischargedate,
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

routerbed.get("/getbed", async (req, res) => {
  try {
    const docdata = await beds.find();
    res.status(201).json(docdata);
    console.log(docdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerbed.get("/getbed/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const docindividual = await beds.findById({ _id: id });
    console.log(docindividual);
    res.status(201).json(docindividual);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerbed.patch("/updatebed/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateddoc = await beds.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateddoc);
    res.status(201).json(updateddoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

routerbed.delete("/deletebed/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await beds.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = routerbed;
