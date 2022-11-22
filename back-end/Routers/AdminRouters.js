const router = require ("express").Router()
const { admin } = require("../Controllers");

router.get("/pagination", admin.Pagination)
router.get("/getallBook", admin.getAllBook)

module.exports = router;