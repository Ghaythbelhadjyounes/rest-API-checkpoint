const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.get("/test", (req, res) => res.send("hello world"));

router.post("/add", async (req, res) => {
  try {
    const { name, age, favoriteFoods } = req.body;
    const newContact = new Contact({ name, age, favoriteFoods });
    await newContact.save();
    res.status(200).send({ msg: " contact added succesfuly...", newContact });
  } catch (error) {
    res.status(400).send({ msg: "can not add contact !!! ", error });
  }
});

router.get("/all", async (req, res) => {
  try {
    const ListContacts = await Contact.find();
    res
      .status(200)
      .send({ msg: "This is the list of all contacts", ListContacts });
  } catch (error) {
    res.status(400).send({ msg: "Can not get contacts !!!", error });
  }
});

router.get("/:_id", async (req, res) => {
  
  try {
    const { _id } = req.params;
    const contactById = await Contact.findById({_id});
    
    res
      .status(200)
      .send({ msg: "contact by id found", contactById });
  } catch (error) {
    res.status(400).send({ msg: "Can not get contact by id!!!", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const OneContact = await Contact.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "This is the one contact", OneContact });
  } catch (error) {
    res.status(400).send({ msg: "Can not get contact !!!", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteContact = await Contact.findOneAndDelete({
      _id: req.params.id,
    });
    res
      .status(200)
      .send({ msg: "Contact is deleted successfully", deleteContact });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete this contact !!!", error });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Contact.findOneAndUpdate(
      { _id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "Contact is updated successfully", result });
  } catch (error) {
    res.status(400).send({ msg: "Can not update this contact !!!", error });
  }
});



module.exports = router;
