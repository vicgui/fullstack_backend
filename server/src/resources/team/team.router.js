const { Router } = require("express");
const { route } = require("express/lib/application");

const teamControllers = require("./team.controllers");

const router = Router();

router.route("/").get(teamControllers.findMany);

router
  .route("/:id")
  .get(teamControllers.findOne)
  .put(teamControllers.updateOne);

router.route("/drivers/:id").get(teamControllers.getDrivers);

router.route("/name/:name").get(teamControllers.findOneByName);

module.exports = router;
