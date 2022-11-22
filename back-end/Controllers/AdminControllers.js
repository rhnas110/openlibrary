const db = require("../models")
const {Op} = require ("sequelize")

module.exports = {
    Pagination: async(req, res) => {
        try{
            const page = parseInt(req.query.page) || 0
            const limit = parseInt(req.query.limit) || 3
            const search = req.query.search_query || ""
            const offset = limit * page
            const totalRows = await db.Books.count({
                where: {
                    [Op.or] : [{title:{
                        [Op.like] : '%'+search+'%'
                    }}, {category:{
                        [Op.like] : '%'+search+'%'
                    }}]
                }
            })
            const totalPage = Math.ceil(totalRows / limit)
            const result = await db.Books.findAll({
                where: {
                    [Op.or] : [{title:{
                        [Op.like] : '%'+search+'%'
                    }}, {category:{
                        [Op.like] : '%'+search+'%'
                    }}]
                },
                offset: offset,
                limit: limit,
                order:[
                    ['id']
                ]
            })
            const resultDesc = await db.Books.findAll({
                where: {
                    [Op.or] : [{title:{
                        [Op.like] : '%'+search+'%'
                    }}, {category:{
                        [Op.like] : '%'+search+'%'
                    }}]
                },
                offset: offset,
                limit: limit,
                order:[
                    ['id', 'DESC']
                ]
            })

            res.status(200).send({
                resultDesc:resultDesc,
                result: result,
                page: page,
                limit: limit,
                totalRows: totalRows,
                totalPage: totalPage
            })
        }catch(err){
            console.log(err)
            res.status(404).send(err)
        }
    },
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