const Driver = require("./driver.model")

const findAll = async(req,res) =>{
    try{
        const docs = await Driver.find().lean().exec();
        res.status(200).json({ results: docs });

    }catch(e){
        res.status(500).json({error: "internal error"})

    }
}

module.exports = {findAll}