const router = require("express").Router();
const { admin } = require("../Controllers");

router.get("/getbooks", admin.getAllBook);

router.get("/book/:id", admin.getBookById);
// add books for admin
router.post("/", admin.add_books);
// end of add books for admin
router.patch("/edit-book/:id", admin.add_books);

module.exports = router;
