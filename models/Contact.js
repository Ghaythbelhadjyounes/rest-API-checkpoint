const mongoose = require("mongoose");

const schema = mongoose.Schema;
const contactSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  favoriteFoods: { type: Array },
});

module.exports = Contact = mongoose.model("contact", contactSchema);
