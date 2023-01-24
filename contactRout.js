
const express = require("express");// routing is use via middleware "use"
const router = express.Router();
const {getContacts,createContact,updateContact,deleteContact,getContact} = require("../controllers/contactController");

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
