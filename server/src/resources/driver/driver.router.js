const { Router } = require("express");
const { route } = require("express/lib/application");

const driverControllers = require("./driver.controllers");

const router = Router();

router.route("/").get(driverControllers.findAll);

router.route("/:id").get(driverControllers.findOne)
    .put(driverControllers.updateOne);

router.route("/team/:id").get(driverControllers.getDriverTeam)

module.exports = router