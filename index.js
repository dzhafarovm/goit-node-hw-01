const { program } = require("commander");

const contactsOperation = require("./controllers/contacts/");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperation.listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await contactsOperation.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with ${id} not found`);
      }
      console.table(contact);
      break;

    case "add":
      const newContact = await contactsOperation.addContact(name, email, phone);
      console.table(newContact);
      break;

    case "update":
      const updateContact = await contactsOperation.updateContact(
        id,
        name,
        email,
        phone
      );
      if (!updateContact) {
        throw new Error(`Contact with ${id} not found`);
      }
      console.table(updateContact);
      break;

    case "remove":
      const removeContact = await contactsOperation.removeContact(id);
      console.table(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

(async () => {
  await invokeAction(argv);
})();
