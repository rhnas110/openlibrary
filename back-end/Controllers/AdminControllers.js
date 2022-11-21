const db = require("../models")

module.exports = {
    getAllBook: async(req, res) => {
        try{
            const response = await db.Books.findAll()
            res.status(200).send(response)
        }catch(err){
            console.log(err)
            res.status(404).send(err)
        }
    }
}