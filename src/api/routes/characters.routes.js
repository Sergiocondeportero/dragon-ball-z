const express = require("express");
const { getCharacters } = require("../controllers/characters.controllers");
const router = express.Router()

router.get("/characters", getCharacters)

module.exports = router
