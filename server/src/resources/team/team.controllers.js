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

const findOneByName = async (req, res) => {
  const { name } = req.params;
  try {
    const doc = await Team.findOne({ name: name });
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Team.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ result: [doc] });
  } catch (e) {
    res.status(500).json({ error: `cannot update ${e}` });
  }
};

const getDrivers = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Team.findOne({ _id: id });
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ result: [doc.current_drivers] });
  } catch (e) {
    res.status(500).json({ error: "cannot find drivers" });
  }
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Team.findOneAndDelete({ _id: id }, { new: true });
    if (!doc) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Cannot delete" });
  }
};

const createOne = async (req, res) => {
  try {
    const newTeam = req.body;
    const doc = await Team.create(newTeam);
    res.status(200).json({ results: [doc] });
  } catch (e) {
    res.status(500).json({ error: `can not create document | error:${e}` });
  }
};

module.exports = {
  findMany,
  findOne,
  findOneByName,
  updateOne,
  getDrivers,
  createOne,
  deleteOne,
};
