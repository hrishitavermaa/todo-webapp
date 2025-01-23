const express = require("express");
const { authController } = require("../controllers/auth");

const router = express.Router();

router.route("/check").get(authController.checkAuth);

module.exports = router;
