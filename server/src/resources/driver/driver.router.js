const { Router } = require("express");
const { route } = require("express/lib/application");

const driverControllers = require("./driver.controllers");

const router = Router();

router.route("/").get(driverControllers.findAll);

module.exports = router