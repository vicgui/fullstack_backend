const { Router } = require("express");
const { route } = require("express/lib/application");

const teamControllers = require("./team.controllers");

const router = Router();

router.route("/").get(teamControllers.findMany).post(teamControllers.createOne);

router
  .route("/:id")
  .get(teamControllers.findOne)
  .put(teamControllers.updateOne)
  .delete(teamControllers.deleteOne);

router.route("/drivers/:id").get(teamControllers.getDrivers);

router.route("/name/:name").get(teamControllers.findOneByName);

module.exports = router;
