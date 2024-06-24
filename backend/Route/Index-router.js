const express = require("express");
const { Contactform } = require("../Controller/Contactcontroller");
const router = express.Router();


router.post("/contactform",Contactform)



module.exports = router;