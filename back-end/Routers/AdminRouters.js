const router = require ("express").Router()
const { admin } = require("../Controllers");

router.get("/getbooks", admin.getAllBook)

module.exports = router;