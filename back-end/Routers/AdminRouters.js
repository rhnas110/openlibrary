const router = require("express").Router();
const { admin } = require("../Controllers");

router.get("/pagination", admin.Pagination);
router.get("/getallBook", admin.getAllBook);

router.get("/book/:id", admin.getBookById);
// add books for admin
router.post("/", admin.add_books);
// end of add books for admin
router.patch("/edit-book/:id", admin.edit_books);
router.delete("/book/:id", admin.deleteBook);

module.exports = router;
