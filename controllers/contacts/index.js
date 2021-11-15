// Get all contacts
const listContacts = require("./listContacts");

// Get contact by ID
const getContactById = require("./getContactById");

// Add contact
const addContact = require("./addContact");

// Update contact by ID
const updateContact = require("./updateContact");

// Delete contact by ID
const removeContact = require("./removeContact");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};
