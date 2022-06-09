const Team = require("../team/team.model");
const Driver = require("./driver.model")

const findAll = async(req,res) =>{
    try{
        const docs = await Driver.find().lean().exec();
        res.status(200).json({ results: docs });

    }catch(e){
        res.status(500).json({error: "internal error"})

    }
}

const findOne = async (req, res) => {
    const { id } = req.params;
    try {
      const doc = await Driver.findOne({ _id: id });
      if (!doc) {
        return res.status(404).json({ error: "Not found" });
      }
      res.status(200).json({ results: [doc] });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Internal error" });
    }
  };
  
  const updateOne = async(req, res) => {
    const {id} = req.params;

    try{
      const doc = await Driver.findOneAndUpdate({_id:id},req.body,{new:true})
      if(!doc){
        return res.status(404).json({error:'Not found'});
      }
      res.status(200).json({result:[doc]})
    }catch(e){
      res.status(500).json({error: "cannot update"})
    }
  }

  const getDriverTeam = async(req,res) =>{
      const {id} = req.params;
      try {
          const doc = await Driver.findOne({_id:id})
          if(!doc){
            return res.status(404).json({error:'Not found'});
          }
          const name = doc.name;
          const docTeam = await Team.findOne({current_drivers:name});
          res.status(200).json({result:docTeam.name})

      }catch(e){
        res.status(500).json({error: "internal error"})

      }
  }

module.exports = {findAll,findOne,updateOne,getDriverTeam}