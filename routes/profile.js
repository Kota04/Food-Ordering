const express = require("express");
const router = express.Router();


const { getProfile } = require("../controllers/indexController");

// for profile
router.get('/',getProfile);


//Router Export
module.exports = router;