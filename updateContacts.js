const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts;
};

module.exports = updateContacts;
