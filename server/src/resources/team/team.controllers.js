const Team = require("./team.model");

const findMany = async (req, res) => {
  try {
    const docs = await Team.find().lean().exec();
    res.status(200).json({ results: docs });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Team.findOne({ _id: id });
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

module.exports = { findMany, findOne };
