const express = require("express");
const { getUsers, getUser, setUser, loginUser } = require("../controllers/product.controller");
const router = express.Router();


router.get("/", getUsers);

router.get("/:id", getUser)

router.post("/", setUser)
router.post("/login", loginUser)

module.exports = router;