const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const contactsSchema = new Shema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactsSchema);

module.exports = Contact;
